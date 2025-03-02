import numpy as np
import polyscope as ps
import time
from typing import Tuple
from compute_function import compute_function_mls, compute_function_mls_vectorized
from scipy.spatial import Delaunay
import trimesh
import time

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

def main():
    # Read point cloud data
    point_cloud, pc_normals, stub_f = read_noff("scaled_high_res_output.off")
    
    # Project points to XY plane for triangulation
    points_2d = point_cloud[:, :2]
    
    # Perform Delaunay triangulation
    tri = Delaunay(points_2d)
    faces = tri.simplices
    
    # Create mesh
    mesh = trimesh.Trimesh(vertices=point_cloud, 
                          faces=faces,
                          vertex_normals=pc_normals)
    
    # Export mesh
    mesh.export('terrain_delaunay.obj')
    
    # Visualize in polyscope
    ps.init()
    
    # Show original points
    ps_cloud = ps.register_point_cloud("Original Point Cloud", point_cloud, radius=0.001)
    
    # Show mesh
    ps_mesh = ps.register_surface_mesh(
        "Surface", 
        point_cloud,
        faces,
        smooth_shade=True
    )
    
    # Add normals visualization
    ps_mesh.add_vector_quantity("normals", pc_normals, defined_on='vertices', enabled=True)
    
    ps.show()

if __name__ == "__main__":
    start = time.time()
    main()
    print(f"took {time.time() - start} seconds")