import cv2
import matplotlib.pyplot as plt
from matplotlib.widgets import Slider, Button
import numpy as np
from PIL import Image as im
import rasterio

def show_cv2_img(img):
    plt.imshow(img)
    plt.colorbar()
    plt.show()

def interactive_lidar_visualization(lidar_data):
    # Create figure and axis
    fig, ax = plt.subplots(figsize=(10, 8))
    plt.subplots_adjust(left=0.1, bottom=0.3)
    
    # Get initial data range
    data_min = np.min(lidar_data)
    data_max = np.max(lidar_data)
    
    # Initial parameters
    init_min = data_min
    init_max = data_max
    init_gamma = 1.0
    
    # Create initial normalized image
    normalized = (lidar_data - init_min) / (init_max - init_min)
    normalized = np.clip(normalized, 0, 1)
    normalized = normalized ** init_gamma
    
    # Display image
    img_display = ax.imshow(normalized, cmap='viridis')
    fig.colorbar(img_display, ax=ax)
    ax.set_title('LiDAR Data Normalization')
    
    # Create slider axes
    ax_min = plt.axes([0.1, 0.2, 0.8, 0.03])
    ax_max = plt.axes([0.1, 0.15, 0.8, 0.03])
    ax_gamma = plt.axes([0.1, 0.1, 0.8, 0.03])
    ax_reset = plt.axes([0.8, 0.025, 0.1, 0.04])
    
    # Create sliders
    min_slider = Slider(ax_min, 'Min Value', data_min, data_max, valinit=init_min)
    max_slider = Slider(ax_max, 'Max Value', data_min, data_max, valinit=init_max)
    gamma_slider = Slider(ax_gamma, 'Gamma', 0.1, 3.0, valinit=init_gamma)
    reset_button = Button(ax_reset, 'Reset')
    
    # Update function
    def update(val=None):
        min_val = min_slider.val
        max_val = max_slider.val
        gamma = gamma_slider.val
        
        # Ensure min < max
        if min_val >= max_val:
            min_val = max_val - (data_max - data_min) * 0.01
            min_slider.set_val(min_val)
            return
            
        # Normalize data based on slider values
        normalized = (lidar_data - min_val) / (max_val - min_val)
        normalized = np.clip(normalized, 0, 1)
        normalized = normalized ** gamma
        
        # Update display
        img_display.set_array(normalized)
        fig.canvas.draw_idle()
    
    # Reset function
    def reset(event):
        min_slider.reset()
        max_slider.reset()
        gamma_slider.reset()
        
    # Connect callbacks
    min_slider.on_changed(update)
    max_slider.on_changed(update)
    gamma_slider.on_changed(update)
    reset_button.on_clicked(reset)
    
    plt.show()
    return fig, (min_slider, max_slider, gamma_slider)

satellite_path = './satellite.jpg'
img = cv2.imread(satellite_path)
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

lidar_path = './lidar.tif'
lidar = rasterio.open(lidar_path)
lidar_img = lidar.read(1)

def interactive_point_movement(x_range=(-10, 10), y_range=(-10, 10)):
    """
    Create an interactive plot with sliders to move a point on an x-y axis.
    """
    # Create figure and axis
    fig, ax = plt.subplots(figsize=(8, 6))
    plt.subplots_adjust(left=0.15, bottom=0.3)
    
    # Initial point position
    init_x = (x_range[0] + x_range[1]) / 2
    init_y = (y_range[0] + y_range[1]) / 2
    
    # Set axis limits
    ax.set_xlim(x_range)
    ax.set_ylim(y_range)
    ax.grid(True)
    ax.set_title('Interactive Point Movement')
    ax.set_xlabel('X')
    ax.set_ylabel('Y')
    
    # Plot initial point
    point, = ax.plot(init_x, init_y, 'ro', markersize=10)
    
    # Create slider axes
    ax_x = plt.axes([0.15, 0.15, 0.7, 0.03])
    ax_y = plt.axes([0.15, 0.1, 0.7, 0.03])
    
    # Create sliders
    x_slider = Slider(ax_x, 'X Position', x_range[0], x_range[1], valinit=init_x)
    y_slider = Slider(ax_y, 'Y Position', y_range[0], y_range[1], valinit=init_y)
    
    # Update function
    def update(val=None):
        x_pos = x_slider.val
        y_pos = y_slider.val
        
        # Update point position
        point.set_data([x_pos], [y_pos])
        
        # Show coordinates in title
        ax.set_title(f'Point Position: ({x_pos:.2f}, {y_pos:.2f})')
        fig.canvas.draw_idle()
    
    # Connect callbacks
    x_slider.on_changed(update)
    y_slider.on_changed(update)
    
    # Initial update
    update()
    
    plt.show()
    return fig, (x_slider, y_slider)

#interactive_lidar_visualization(lidar_img)

interactive_point_movement(x_range=(-10, 10), y_range=(-10, 10))