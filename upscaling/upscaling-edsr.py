import cv2
import matplotlib.pyplot as plt
import numpy as np
from PIL import Image as im
import rasterio

# Load satellite image
satellite_path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\satellite.jpg"
img = cv2.imread(satellite_path)

# Convert BGR to RGB
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Load LiDAR GeoTIFF
lidar_path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\lidar.tif"
with rasterio.open(lidar_path) as lidar:
    lidar_data = lidar.read(1)  # Read the first band (elevation)

# Normalize LiDAR data to 0-255
lidar_data = cv2.normalize(lidar_data, None, 0, 255, cv2.NORM_MINMAX).astype(np.uint8)

# Resize LiDAR to match satellite image dimensions
lidar_resized = cv2.resize(lidar_data, (img_rgb.shape[1], img_rgb.shape[0]))

# **Method 1: Use LiDAR as a Contrast Modifier (Multiply with RGB)**
# Convert LiDAR to float for processing
lidar_float = lidar_resized.astype(np.float32) / 255.0

# Enhance RGB with LiDAR (element-wise multiplication)
img_fused = (img_rgb.astype(np.float32) * (1 + lidar_float[:, :, np.newaxis])).clip(0, 255).astype(np.uint8)

# Load EDSR model
sr = cv2.dnn_superres.DnnSuperResImpl_create()
model_path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\EDSR_x4.pb"
sr.readModel(model_path)
sr.setModel("edsr", 4)

# Super-resolve image (3-channel required)
result = sr.upsample(img_fused)

# Convert result to uint8 format
result_image = np.clip(result, 0, 255).astype(np.uint8)

# Save images
im.fromarray(result_image[:650, :650]).save("upscaling\\EDSR_upscaled_satellite_topleft.png")
im.fromarray(img_rgb[:150, :150]).save("upscaling\\original_satellite_topleft.png")

# Save as GeoTIFF
with rasterio.open(lidar_path) as src:
    meta = src.meta.copy()
    meta.update({"height": result_image.shape[0], "width": result_image.shape[1], "count": 3})

    with rasterio.open("upscaling\\upscaled_satellite.tif", "w", **meta) as dest:
        for i in range(3):  # Save RGB channels
            dest.write(result_image[:, :, i], i + 1)

# Display images
plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.imshow(img_rgb[:150, :150])
plt.title("Original Image")

plt.subplot(1, 2, 2)
plt.imshow(result_image[:650, :650])
plt.title("Upscaled Image")
plt.show()
