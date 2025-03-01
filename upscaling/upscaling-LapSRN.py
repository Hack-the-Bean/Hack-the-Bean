import cv2
import matplotlib.pyplot as plt

img=cv2.imread("C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\satellite.jpg")
print("Image shape:", img.shape)
#img = img[180:245, 170:290]

sr = cv2.dnn_superres.DnnSuperResImpl_create()
 
path = "C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\LapSRN_x8.pb"
 
sr.readModel(path)
 
sr.setModel("lapsrn",8)
 
result = sr.upsample(img)
 
# Resized image
resized = cv2.resize(img,dsize=None,fx=8,fy=8)
 
plt.figure(figsize=(12,8))
plt.subplot(1,3,1)
# Original image
plt.imshow(img[:,:,::-1])
plt.subplot(1,3,2)
# SR upscaled
plt.imshow(result[:,:,::-1])
plt.savefig("LapSRN_upscaled_satellite.png", bbox_inches='tight', dpi='figure')
plt.show()
