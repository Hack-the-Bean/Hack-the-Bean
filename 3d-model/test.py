import numpy as np
import polyscope as ps
import time
from typing import Tuple
from compute_function import compute_function_mls, compute_function_mls_vectorized
import time
from skimage import measure 


def read_noff(filename: str) -> Tuple[np.ndarray, np.ndarray, np.ndarray]:
    vertices = []
    normals = []
    
    with open(filename, 'r') as f:
        header = f.readline().strip()
        if header != 'NOFF':
            raise ValueError(f"Expected NOFF header, got {header}")
            
        counts = f.readline().strip().split()
        n_vertices = int(counts[0])
        
        for _ in range(n_vertices):
            line = f.readline().strip().split()
            values = [float(x) for x in line]
            vertices.append(values[:3])
            normals.append(values[3:6])
    
    return (np.array(vertices, dtype=np.float64),
            np.array(normals, dtype=np.float64),
            np.array([]))

def grid_locations(grid_res: int, bound_min: np.ndarray, bound_max: np.ndarray) -> np.ndarray:
    """Match the C++ implementation more closely"""
    sampled_locations = np.zeros((grid_res * grid_res * grid_res, 3))
    span = (bound_max - bound_min) / (grid_res - 1)
    
    for k in range(grid_res):
        for j in range(grid_res):
            for i in range(grid_res):
                idx = grid_res * grid_res * k + grid_res * j + i
                sampled_locations[idx] = bound_min + np.array([i * span[0], j * span[1], k * span[2]])
    
    return sampled_locations

def main():
    # Parameters
    grid_res = 16  # Try increasing this for better resolution
    h = 0.0001

    # Initialize polyscope
    ps.init()

    # Read point cloud data
    point_cloud, pc_normals, stub_f = read_noff("scaled_high_res_output.off")
    
    # Register point cloud
    cloud = ps.register_point_cloud("Point Cloud", point_cloud)
    cloud.add_vector_quantity("normals", pc_normals)

    # Compute bounds and grid
    diag_length = np.linalg.norm(np.max(point_cloud, axis=0) - np.min(point_cloud, axis=0))
    point_cloud_min = np.min(point_cloud, axis=0)
    point_cloud_max = np.max(point_cloud, axis=0)
    bound_min = point_cloud_min - 0.0 * (point_cloud_max - point_cloud_min)
    bound_max = point_cloud_max + 0.0 * (point_cloud_max - point_cloud_min)
    
    # Create grid and compute MLS
    sampled_locations = grid_locations(grid_res, bound_min, bound_max)
    print("Computing MLS values...")
    mls_values = compute_function_mls_vectorized(sampled_locations, point_cloud, pc_normals, h * diag_length)
    
    # Reshape MLS values
    mls_values_array = mls_values.astype(np.float32).reshape(grid_res, grid_res, grid_res, order='F')
    
    # Generate mesh using marching cubes with a specific level
    vertices, faces, normals, _ = measure.marching_cubes(mls_values_array, level=0, spacing=(1.0, 1.0, 1.0))
    
    # Scale vertices back to original coordinate system
    vertices = vertices * (bound_max - bound_min) / (grid_res - 1) + bound_min
    
    # Create trimesh mesh
    import trimesh
    mesh = trimesh.Trimesh(vertices=vertices, 
                          faces=faces,
                          vertex_normals=normals)
    
    # Process mesh before export
    mesh.process(validate=True)  # Ensure mesh is valid
    mesh.fill_holes()  # Fill any holes
    mesh.remove_duplicate_faces()  # Remove any duplicate faces
    mesh.remove_degenerate_faces()  # Remove bad faces
    mesh.fix_normals()  # Fix normal directions
    
    # Export processed mesh
    mesh.export('terrain_mesh_processed.glb')
    
    # Also export as OBJ for backup
    mesh.export('terrain_mesh_processed.obj')
    
    # Register the processed mesh in polyscope
    ps_mesh = ps.register_surface_mesh(
        "Processed Mesh",
        mesh.vertices,
        mesh.faces,
        smooth_shade=True
    )
    
    ps.show()

def save_mesh_with_data(vertices, faces, normals, scalar_values, filename):
    with open(filename, 'w') as f:
        # Write vertices with their scalar values as texture coordinates
        for v, s in zip(vertices, scalar_values):
            f.write(f'v {v[0]} {v[1]} {v[2]}\n')
        
        # Write vertex normals
        for n in normals:
            f.write(f'vn {n[0]} {n[1]} {n[2]}\n')
        
        # Write faces with normal indices
        for face in faces:
            # OBJ uses 1-based indexing
            f.write(f'f {face[0]+1}//{face[0]+1} {face[1]+1}//{face[1]+1} {face[2]+1}//{face[2]+1}\n')
            
if __name__ == "__main__":
    start = time.time()
    main()
    print(f"took {time.time() - start} seconds")