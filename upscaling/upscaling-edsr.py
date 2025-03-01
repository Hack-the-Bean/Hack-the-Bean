import cv2
import matplotlib.pyplot as plt
import numpy as np 
from PIL import Image as im 
import rasterio
import gdal

# # Open the GeoTIFF file
# with rasterio.open('C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\satellite.tif') as dataset:
#     image_data = dataset.read()
    
#     # Convert image data to a NumPy array suitable for OpenCV
# img = np.moveaxis(image_data, 0, -1)

img = gdal.Open('C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\satellite.tif')
img = np.moveaxis(img, 0, -1)

#img = img[:150, :150]

sr = cv2.dnn_superres.DnnSuperResImpl_create()
 
path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\EDSR_x4.pb"
 
sr.readModel(path)
 
sr.setModel("edsr",4)
 
result = sr.upsample(img)

# # Convert the result back to the original shape for GeoTIFF
# result_geo = np.moveaxis(result, -1, 0)

# # Update metadata for the output GeoTIFF
# out_meta = dataset.meta.copy()
# out_meta.update({
#     "driver": "GTiff",
#     "height": result_geo.shape[1],
#     "width": result_geo.shape[2],
#     "count": result_geo.shape[0]
# })

# # Save the output as a GeoTIFF
# with rasterio.open('upscaled_satellite.tif', 'w', **out_meta) as dest:
#     dest.write(result_geo)

result_image = im.fromarray(result) 
original_image = im.fromarray(img)
saved = result_image.save("LapSRN_upscaled_satellite.jpg")
saved2 = original_image.save("original_satellite.png")

# plt.figure(figsize=(12,8))
# plt.subplot(1,3,1)
# # Original image
# plt.imshow(img[:,:,::-1])
# plt.subplot(1,3,2)
# # SR upscaled
# plt.imshow(result[:,:,::-1])
# plt.savefig("LapSRN_upscaled_satellite_plot.png", bbox_inches='tight', dpi='figure')
# plt.show()
