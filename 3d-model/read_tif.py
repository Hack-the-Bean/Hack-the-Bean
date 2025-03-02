import numpy as np
from skimage import measure
import tifffile
import rasterio

def dsm_to_off(tif_path, off_path):
    """
    Convert DSM (Digital Surface Model) .tif to .OFF format with exponential elevation scaling
    to maximize vertical separation between points
    """
    # Read the DSM using rasterio
    with rasterio.open(tif_path) as src:
        # Read the elevation data
        elevation = src.read(1)  # Read first band
        
        # Handle no data values
        nodata = src.nodata
        if nodata is not None:
            elevation = np.where(elevation == nodata, np.nan, elevation)
        
        # Fill NaN values with interpolated values
        elevation = fill_nan(elevation)
        
        elevation = 10 * elevation
        
        # Get the pixel sizes
        pixel_size_x = src.transform[0]
        pixel_size_y = -src.transform[4]  # Negative because Y increases downward in the image
        
        # Create coordinate grids with expanded scale
        horizontal_scale = 2.0  # Adjust this to control horizontal separation
        rows, cols = elevation.shape
        x = np.arange(0, cols) * pixel_size_x * horizontal_scale
        y = np.arange(0, rows) * pixel_size_y * horizontal_scale
        X, Y = np.meshgrid(x, y)
        
        print(f"Grid size: {rows} x {cols}")
        print(f"Elevation range: {np.nanmin(elevation)} to {np.nanmax(elevation)}")
        
        # Create vertices
        vertices = []
        normals = []
        
        # Calculate normals and create vertices
        for i in range(rows):
            for j in range(cols):
                # Skip if elevation is NaN
                if np.isnan(elevation[i,j]):
                    continue
                
                # Add vertex
                vertices.append([X[i,j], Y[i,j], elevation[i,j]])
                
                # Calculate normal (using central differences)
                if 0 < i < rows-1 and 0 < j < cols-1:
                    dx = elevation[i,j+1] - elevation[i,j-1]
                    dy = elevation[i+1,j] - elevation[i-1,j]
                    normal = np.array([-dx, -dy, 2.0])
                    norm = np.linalg.norm(normal)
                    if norm > 0:
                        normal = normal / norm
                    else:
                        normal = np.array([0, 0, 1])
                else:
                    normal = np.array([0, 0, 1])
                
                normals.append(normal)
        
        # Create vertex index map
        vertex_map = np.full((rows, cols), -1, dtype=int)
        for idx, (i, j) in enumerate([(i, j) for i in range(rows) for j in range(cols) if not np.isnan(elevation[i,j])]):
            vertex_map[i,j] = idx
        
        # Create faces (triangles)
        faces = []
        for i in range(rows-1):
            for j in range(cols-1):
                # Get vertex indices for this cell
                v00 = vertex_map[i,j]
                v01 = vertex_map[i,j+1]
                v10 = vertex_map[i+1,j]
                v11 = vertex_map[i+1,j+1]
                
                # Only create triangles if all vertices are valid
                if v00 >= 0 and v01 >= 0 and v10 >= 0 and v11 >= 0:
                    faces.append([v00, v01, v10])
                    faces.append([v01, v11, v10])
        
        print(f"Created {len(vertices)} vertices and {len(faces)} faces")
        
        # Write to OFF file
        with open(off_path, 'w') as f:
            f.write('NOFF\n')
            f.write(f'{len(vertices)} {len(faces)} 0\n')
            
            # Write vertices and normals
            for vert, norm in zip(vertices, normals):
                f.write(f'{vert[0]} {vert[1]} {vert[2]} {norm[0]} {norm[1]} {norm[2]}\n')
            
            # Write faces
            for face in faces:
                f.write(f'3 {face[0]} {face[1]} {face[2]}\n')

def fill_nan(array):
    """Simple NaN filling by interpolation"""
    mask = np.isnan(array)
    array[mask] = np.interp(np.flatnonzero(mask), 
                           np.flatnonzero(~mask), 
                           array[~mask])
    return array

# Usage
try:
    dsm_to_off('scaled_high_res_output.tif', 'scaled_high_res_output.off')
except Exception as e:
    print(f"Error processing file: {e}")
    # Print more debug info
    with rasterio.open('scaled_high_res_output.tif') as src:
        print(f"File info:")
        print(f"Driver: {src.driver}")
        print(f"Size: {src.width} x {src.height}")
        print(f"Bands: {src.count}")
        print(f"Dtype: {src.dtypes}")
        print(f"NoData value: {src.nodata}")
        print(f"Transform: {src.transform}")