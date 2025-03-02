import rasterio
import numpy as np
import cv2
import matplotlib.pyplot as plt

# Load the satellite image (JPG)
satellite_path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\satellite.jpg"
sat_img = cv2.imread(satellite_path)
sat_img = cv2.cvtColor(sat_img, cv2.COLOR_BGR2RGB)
sat_height, sat_width, _ = sat_img.shape

# Load the LiDAR DEM (TIFF)
lidar_path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\lidar.tif"
with rasterio.open(lidar_path) as dem_src:
    dem = dem_src.read(1)  # DEM is single-band
    dem_meta = dem_src.meta

# Resize DEM to match the satellite image resolution
resized_dem = cv2.resize(dem, (sat_width, sat_height), interpolation=cv2.INTER_CUBIC)

# Fix NaNs in DEM
resized_dem = np.nan_to_num(resized_dem, nan=0.0)  # Replace NaNs with 0

# Normalize DEM to 0–255 range using float32
resized_dem = (255.0 * (resized_dem - resized_dem.min()) / (resized_dem.max() - resized_dem.min())).astype(np.float32)

# Ensure DEM values are within the 0-255 range
resized_dem = np.clip(resized_dem, 0, 255)

# Convert DEM to uint8 for stacking with RGB image
resized_dem_uint8 = resized_dem.astype(np.uint8)

# Stack the satellite and LiDAR data
merged_data = np.dstack((sat_img, resized_dem_uint8))  # (H, W, 4) -> RGB + DEM

# Save the merged image as a GeoTIFF
with rasterio.open("merged.tif", "w", driver="GTiff",
                   height=sat_height, width=sat_width,
                   count=4, dtype=np.uint8, crs=dem_meta["crs"],
                   transform=dem_meta["transform"]) as dst:
    for i in range(3):  # Write RGB channels
        dst.write(sat_img[:, :, i], i + 1)  # RGB as uint8
    dst.write(resized_dem_uint8, 4)  # DEM as uint8

# Display the merged image
plt.figure(figsize=(10, 10))
plt.imshow(merged_data)
plt.title("Merged Image")
plt.show()