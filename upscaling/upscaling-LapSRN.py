import cv2
import matplotlib.pyplot as plt
import numpy as np 
from PIL import Image as im 

img=cv2.imread("C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\satellite.jpg")
print("Image shape:", img.shape)
img = img[:100, :100]

sr = cv2.dnn_superres.DnnSuperResImpl_create()
 
path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\LapSRN_x8.pb"
 
sr.readModel(path)
 
sr.setModel("lapsrn",8)
 
result = sr.upsample(img)

result_image = im.fromarray(result) 
original_image = im.fromarray(img)
saved = result_image.save("LapSRN_upscaled_satellite.jpg")
saved2 = original_image.save("original_satellite.png")
 
plt.figure(figsize=(12,8))
plt.subplot(1,3,1)
# Original image
plt.imshow(img[:,:,::-1])
plt.subplot(1,3,2)
# SR upscaled
plt.imshow(result[:,:,::-1])
plt.savefig("LapSRN_upscaled_satellite_plot.png", bbox_inches='tight', dpi='figure')
plt.show()
