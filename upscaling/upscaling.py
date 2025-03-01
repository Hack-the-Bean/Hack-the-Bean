import cv2
import matplotlib.pyplot as plt
# Read image
img = cv2.imread("AI-Courses-By-OpenCV-Github.png")
plt.imshow(img[:,:,::-1])
plt.show()