import cv2 as cv
from PIL import Image as im
import numpy as np
import rasterio

# Read the original image using rasterio
with rasterio.open('DSM_TQ0075_P_12757_20230109_20230315.tif') as src:
    org_img = src.read(1)  # Read the first band
    meta = src.meta  # Get the metadata

# Crop the image
img = org_img

org_img = org_img * 10000

# Update metadata for the output GeoTIFF
out_meta = meta.copy()
out_meta.update({
    "driver": "GTiff",
    "height": img.shape[0],
    "width": img.shape[1],
    "count": 1  # Assuming a single-band image
})

# Save the output as a GeoTIFF
with rasterio.open('scaled_high_res_output.tif', 'w', **out_meta) as dest:
    dest.write(img.astype(rasterio.float32), 1)  # Write the cropped image