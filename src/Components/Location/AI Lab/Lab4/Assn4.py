# Import required libraries
from queue import PriorityQueue  # For implementing UCS with priority queue
import matplotlib.pyplot as plt  # For visualization
import networkx as nx  # For graph creation and visualization

def create_graph():
    # Define a graph with cities (nodes) and distances (weights)
    graph = {
        # Format: 'Node': {'Neighbor': cost}
        'A': {'B': 4, 'C': 3, 'D': 7},       # Node A connects to B(4), C(3), D(7)
        'B': {'E': 5, 'F': 3},               # Node B connects to E(5), F(3)
        'C': {'E': 6, 'F': 8, 'G': 4},       # Node C connects to E(6), F(8), G(4)
        'D': {'G': 3, 'H': 5},               # Node D connects to G(3), H(5)
        'E': {'I': 4, 'J': 7},               # Node E connects to I(4), J(7)
        'F': {'J': 6},                       # Node F connects to J(6)
        'G': {'J': 5},                       # Node G connects to J(5)
        'H': {'J': 8},                       # Node H connects to J(8)
        'I': {'J': 3},                       # Node I connects to J(3)
        'J': {}                              # Goal node, no outgoing edges
    }
    return graph

def find_all_paths(graph, start, goal, path=None, cost=0, all_paths=None):
    # Initialize path list if None
    if path is None:
        path = []
    # Initialize all_paths list if None
    if all_paths is None:
        all_paths = []
    
    # Add current node to path
    path = path + [start]
    
    # If goal reached, add path and cost to all_paths
    if start == goal:
        all_paths.append((path.copy(), cost))
    else:
        # Explore all neighbors of current node
        for neighbor, weight in graph[start].items():
            # Skip if neighbor already in path (avoid cycles)
            if neighbor not in path:
                # Recursive call to explore this neighbor
                find_all_paths(graph, neighbor, goal, path, cost + weight, all_paths)
    
    return all_paths

def ucs(graph, start, goal):
    # Initialize priority queue for UCS
    queue = PriorityQueue()
    # Add start node with cost 0
    queue.put((0, [start]))
    # Set to keep track of visited nodes
    visited = set()
    
    # Print initial queue operation
    print("\nQueue Operations:")
    print(f"Push: ({0}, [{start}])")
    
    while not queue.empty():
        # Get node with lowest cost from queue
        cost, path = queue.get()
        current = path[-1]  # Get current node (last in path)
        print(f"Pop: ({cost}, {path})")  # Print pop operation
        
        # If goal reached, return path and cost
        if current == goal:
            return path, cost
        
        # If current node not visited
        if current not in visited:
            # Mark as visited
            visited.add(current)
            
            # Explore all neighbors
            for neighbor, weight in graph[current].items():
                if neighbor not in visited:
                    # Calculate new cost and path
                    new_cost = cost + weight
                    new_path = path + [neighbor]
                    # Add to queue
                    queue.put((new_cost, new_path))
                    # Print push operation
                    print(f"Push: ({new_cost}, {new_path})")
    
    return None, None

def visualize_graph(graph, paths=None, ucs_path=None):
    # Create directed graph
    G = nx.DiGraph()
    
    # Add edges and weights to graph
    for node, neighbors in graph.items():
        for neighbor, weight in neighbors.items():
            G.add_edge(node, neighbor, weight=weight)
    
    # Set up plot size
    plt.figure(figsize=(12, 8))
    # Calculate node positions
    pos = nx.spring_layout(G)
    
    # Draw nodes
    nx.draw_networkx_nodes(G, pos, node_color='lightblue', node_size=500)
    # Draw node labels
    nx.draw_networkx_labels(G, pos)
    
    # Get and draw edge labels (weights)
    edge_labels = nx.get_edge_attributes(G, 'weight')
    nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels)
    
    # Draw edges
    nx.draw_networkx_edges(G, pos)
    
    # If paths provided, draw them in different colors
    if paths:
        colors = ['r', 'g', 'b', 'y']  # Colors for different paths
        for i, (path, _) in enumerate(paths):
            # Create edge list for this path
            path_edges = list(zip(path[:-1], path[1:]))
            # Draw path edges
            nx.draw_networkx_edges(G, pos, edgelist=path_edges, 
                                 edge_color=colors[i % len(colors)], width=2)
    
    # If UCS path provided, draw it in purple
    if ucs_path:
        # Create edge list for UCS path
        ucs_edges = list(zip(ucs_path[:-1], ucs_path[1:]))
        # Draw UCS path edges
        nx.draw_networkx_edges(G, pos, edgelist=ucs_edges, 
                             edge_color='purple', width=3)
    
    # Set title and turn off axis
    plt.title("Graph with Paths")
    plt.axis('off')
    plt.show()

def main():
    # Create the graph
    graph = create_graph()
    # Define start and goal nodes
    start_node = 'A'
    goal_node = 'J'
    
    # Find and print all possible paths
    print(f"\nFinding all paths from {start_node} to {goal_node}:")
    all_paths = find_all_paths(graph, start_node, goal_node)
    
    print("\nAll possible paths and their costs:")
    # Print each path and its cost5e5
    for path, cost in all_paths:
        print(f"Path: {' -> '.join(path)}, Cost: {cost}")
    
    # Find and print UCS path
    print("\nFinding UCS path:")
    ucs_path, ucs_cost = ucs(graph, start_node, goal_node)
    print(f"\nUCS Path: {' -> '.join(ucs_path)}, Cost: {ucs_cost}")
    
    # Visualize the graph with all paths
    visualize_graph(graph, all_paths, ucs_path)

# Run the program if this is the main script
if __name__ == "__main__":
    main() 