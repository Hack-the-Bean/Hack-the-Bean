import numpy as np
from typing import List, Tuple
from scipy.spatial import cKDTree

# Constants
nan_value = np.nan

def gaussian(r: float, h: float) -> float:
    """
    Computes a weight value using the gaussian function.
    
    Args:
        r: The distance between the grid location and the point
        h: The influence radius of the weight function
    
    Returns:
        The weight value
    """
    return np.exp(-(r**2) / (h**2))

def wendland(r: float, h: float) -> float:
    """
    Computes a weight value using the Wendland function.
    
    Args:
        r: The distance between the grid location and the point
        h: The influence radius of the weight function
    
    Returns:
        The weight value
    """
    r_div_h = r / h
    return pow(1.0 - r_div_h, 4) * (4.0 * r_div_h + 1.0) if r <= h else 0.0

def singular(r: float, h: float) -> float:
    """
    Computes the singular weight function.
    
    Args:
        r: The distance between the grid location and the point
        h: Has no effect, included to allow direct replacement of weight function
    
    Returns:
        The weight value
    """
    return 1 / (pow(r, 2) + pow(1e-6, 2))

class Point:
    """A structure representing a 3D point."""
    def __init__(self, x: float, y: float, z: float):
        self.x = x
        self.y = y
        self.z = z

class PointCloud:
    """A structure representing a 3D point cloud."""
    def __init__(self):
        self.pts: List[Point] = []

    def kdtree_get_point_count(self) -> int:
        return len(self.pts)

    def kdtree_get_pt(self, idx: int, dim: int) -> float:
        if dim == 0:
            return self.pts[idx].x
        elif dim == 1:
            return self.pts[idx].y
        else:
            return self.pts[idx].z

def compute_function_mls(grid_locations: np.ndarray,
                        point_cloud: np.ndarray,
                        point_normals: np.ndarray,
                        h: float) -> np.ndarray:
    num_grid_locations = grid_locations.shape[0]
    num_points = point_cloud.shape[0]
    mls_values = np.zeros(num_grid_locations)

    for i in range(num_grid_locations):
        # Match C++'s RowVectorXd gridLocation = gridLocations.row(i);
        grid_location = grid_locations[i:i+1, :] # Make it a row vector explicitly

        local_sum = 0.0
        weight_sum = 0.0

        for j in range(num_points):
            # Match C++'s RowVectorXd point = pointCloud.row(j);
            point = point_cloud[j:j+1, :]
            
            # Match C++'s VectorXd rVec = gridLocation - point;
            r_vec = (grid_location - point).T  # Make it a column vector

            if np.max(np.abs(r_vec)) > h:
                continue

            r = np.linalg.norm(r_vec)
            if r > h:
                continue

            weight = wendland(r, h)
            
            # Match C++'s VectorXd normalT = pointNormals.row(j).transpose();
            normal_T = point_normals[j:j+1, :].T
            
            # Match C++'s localSum += weight * normalT.dot(rVec);
            local_sum += weight * float(normal_T.T @ r_vec)
            weight_sum += weight

        mls_values[i] = local_sum / weight_sum if weight_sum != 0 else 0.0

    return mls_values

def compute_function_mls_vectorized(grid_locations: np.ndarray,
                                  point_cloud: np.ndarray,
                                  point_normals: np.ndarray,
                                  h: float) -> np.ndarray:
    """
    Highly optimized MLS computation using vectorization and KD-tree.
    """
    num_grid_locations = grid_locations.shape[0]
    mls_values = np.zeros(num_grid_locations)
    
    # Build KD-tree
    kdtree = cKDTree(point_cloud)
    
    # Process grid points in batches for better memory efficiency
    batch_size = 1000
    
    for start_idx in range(0, num_grid_locations, batch_size):
        end_idx = min(start_idx + batch_size, num_grid_locations)
        batch_locations = grid_locations[start_idx:end_idx]
        
        # Find all points within radius h for this batch
        indices_list = kdtree.query_ball_point(batch_locations, h)
        
        for i, indices in enumerate(indices_list):
            if not indices:
                # Use a large positive value for points far from the surface
                mls_values[start_idx + i] = h
                continue
                
            # Get relevant points and normals
            points = point_cloud[indices]
            normals = point_normals[indices]
            
            # Compute all r_vectors at once
            r_vectors = batch_locations[i] - points
            
            # Compute all distances at once
            distances = np.linalg.norm(r_vectors, axis=1)
            
            # Compute all weights at once
            weights = np.array([wendland(r, h) for r in distances])
            
            # Compute all dot products at once
            dots = np.sum(r_vectors * normals, axis=1)
            
            # Compute final value
            local_sum = np.sum(weights * dots)
            weight_sum = np.sum(weights)
            
            # Use h as the default value when weight_sum is zero
            mls_values[start_idx + i] = h if weight_sum == 0 else local_sum / weight_sum
    
    return mls_values