import cv2
import matplotlib.pyplot as plt
import numpy as np
from PIL import Image as im
import rasterio
from sklearn.decomposition import PCA
from skimage import exposure

# ---------------------------------------
# 1. Load satellite image (BGR -> RGB)
# ---------------------------------------
satellite_path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\satellite.jpg"
sat_img = cv2.imread(satellite_path)
img_rgb = cv2.cvtColor(sat_img, cv2.COLOR_BGR2RGB)

# ---------------------------------------
# 2. Load LiDAR GeoTIFF
# ---------------------------------------
lidar_path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\lidar.tif"
with rasterio.open(lidar_path) as lidar_ds:
    lidar_data = lidar_ds.read(1)

# ---------------------------------------
# 3. Prepare data for PCA
# ---------------------------------------
# Ensure valid LiDAR values (avoid log of <= 0)
lidar_data_shifted = np.where(lidar_data <= 0, 1, lidar_data)
log_lidar_data = np.log2(lidar_data_shifted)

# Resize LiDAR to match satellite image
lidar_resized = cv2.resize(log_lidar_data, (img_rgb.shape[1], img_rgb.shape[0]))

# Flatten RGB (H,W,3) -> (H*W, 3)
h, w, c = img_rgb.shape
img_flat = img_rgb.reshape(-1, c).astype(np.float32)

# Flatten LiDAR (H,W) -> (H*W, 1)
lidar_flat = lidar_resized.reshape(-1, 1).astype(np.float32)

# Concatenate into (H*W, 4): [R, G, B, LiDAR]
combined_flat = np.hstack([img_flat, lidar_flat])

# ---------------------------------------
# 4. PCA Fusion
# ---------------------------------------
# Apply PCA to reduce or transform data
# For example, keep 3 components to maintain an RGB-like output
pca = PCA(n_components=3)
fused_flat = pca.fit_transform(combined_flat)

# Reshape back to (H, W, 3)
img_fused = fused_flat.reshape(h, w, 3)

# Normalize to a smaller range to decrease color intensity
img_fused = cv2.normalize(img_fused, None, 0, 255, cv2.NORM_MINMAX)
img_fused = img_fused.astype(np.uint8)

# ---------------------------------------
# 5. Load EDSR model & upsample
# ---------------------------------------
sr = cv2.dnn_superres.DnnSuperResImpl_create()
model_path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\EDSR_x4.pb"
sr.readModel(model_path)
sr.setModel("edsr", 4)

# Upsample fused image
result = sr.upsample(img_fused)

# ---------------------------------------
# 6. Convert & save results
# ---------------------------------------
result_image = np.clip(result, 0, 255).astype(np.uint8)

im.fromarray(result_image).save("upscaling\\PCA_EDSR_upscaled.png")
im.fromarray(img_fused).save("upscaling\\PCA_fused.png")

# Save as GeoTIFF (with 3 components)
with rasterio.open(lidar_path) as src:
    meta = src.meta.copy()
    meta.update({"height": result_image.shape[0], 
                 "width": result_image.shape[1], 
                 "count": 3,
                 "driver": "GTiff"})

    with rasterio.open("upscaling\\PCA_upscaled_satellite.tif", "w", **meta) as dest:
        for channel in range(3):
            dest.write(result_image[:, :, channel], channel + 1)

# ---------------------------------------
# 7. Display images
# ---------------------------------------
plt.figure(figsize=(12, 5))
plt.subplot(1, 3, 1)
plt.imshow(img_rgb)
plt.title("Original RGB")

plt.subplot(1, 3, 2)
plt.imshow(img_fused)
plt.title("After PCA Fusion")

plt.subplot(1, 3, 3)
plt.imshow(result_image)
plt.title("Upscaled via EDSR")
plt.tight_layout()
plt.show()