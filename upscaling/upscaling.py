import cv2
import matplotlib.pyplot as plt

# Read image
img = cv2.imread("C:\\Users\\lyleb\\Documents\\Uni Stuff\\4th Year\\ASR\\Hack-the-Bean\\upscaling\\AI-Courses-By-OpenCV-Github.png")
# Cropout OpenCV logo
img = img[:80,850:]
plt.imshow(img[:,:,::-1])
plt.show()