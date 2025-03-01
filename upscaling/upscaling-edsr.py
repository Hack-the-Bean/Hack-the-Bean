import cv2
import matplotlib.pyplot as plt
import numpy as np 
from PIL import Image as im 
import rasterio
from osgeo import gdal, ogr

img=cv2.imread("C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\satellite.jpg")

sr = cv2.dnn_superres.DnnSuperResImpl_create()
 
path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\EDSR_x4.pb"
 
sr.readModel(path)
 
sr.setModel("edsr",4)
 
result = sr.upsample(img)

result_image = im.fromarray(result) 
original_image = im.fromarray(img)
saved = result_image.save("upscaling\EDSR_upscaled_satellite.jpg")

plt.figure(figsize=(10,4))
plt.subplot(1,3,1)
# Original image
plt.imshow(img[:,:,::-1])
plt.subplot(1,3,2)
# SR upscaled
plt.imshow(result[:,:,::-1])
# plt.savefig("LapSRN_upscaled_satellite_plot.png", bbox_inches='tight', dpi='figure')
plt.show()

""" ALL FOR TIF
# Open the GeoTIFF file
with rasterio.open('C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\satellite.tif') as dataset:
    image_data = dataset.read()
    
    # Convert image data to a NumPy array suitable for OpenCV
img = np.moveaxis(image_data, 0, -1)


dataset = gdal.Open(r'C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\satellite.tif')
metadata = dataset.GetMetadata()

dataset = dataset[:, :, :3]


# since there are 3 bands 
# we store in 3 different variables 
band1 = dataset.GetRasterBand(1) # Red channel 
band2 = dataset.GetRasterBand(2) # Green channel 
band3 = dataset.GetRasterBand(3) # Blue channel

b1 = band1.ReadAsArray() 
b2 = band2.ReadAsArray() 
b3 = band3.ReadAsArray() 

img = np.dstack((b1, b2, b3)) 
f = plt.figure() 
plt.imshow(img) 
plt.savefig('Tiff.png') 
plt.show() 

# Convert the result back to the original shape for GeoTIFF
result_geo = np.moveaxis(result, -1, 0)

# Update metadata for the output GeoTIFF
out_meta = dataset.meta.copy()
out_meta.update({
    "driver": "GTiff",
    "height": result_geo.shape[1],
    "width": result_geo.shape[2],
    "count": result_geo.shape[0]
})

# Save the output as a GeoTIFF
with rasterio.open('upscaled_satellite.tif', 'w', **out_meta) as dest:
    dest.write(result_geo)
"""
