import networkx as nx
import matplotlib.pyplot as plt
from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v, weight):
        self.graph[u].append((v, weight))
        self.graph[v].append((u, weight))  # Assuming an undirected graph

    def dls(self, src, dest, limit, path=[], cost=0):
        path.append(src)
        if src == dest:
            return path, cost
        
        if limit <= 0:
            path.pop()
            return None, float('inf')

        shortest_path, min_cost = None, float('inf')

        for neighbor, weight in self.graph[src]:
            if neighbor not in path:
                new_path, new_cost = self.dls(neighbor, dest, limit - 1, path[:], cost + weight)
                if new_path and new_cost < min_cost:
                    shortest_path, min_cost = new_path, new_cost
        
        return shortest_path, min_cost

    def draw_graph(self, shortest_path):
        G = nx.Graph()
        
        # Add edges
        for node in self.graph:
            for neighbor, weight in self.graph[node]:
                G.add_edge(node, neighbor, weight=weight)

        pos = nx.spring_layout(G)  # Layout for visualization
        labels = nx.get_edge_attributes(G, 'weight')

        # Draw nodes and edges
        nx.draw(G, pos, with_labels=True, node_color='lightblue', edge_color='gray', node_size=3000, font_size=12)
        nx.draw_networkx_edge_labels(G, pos, edge_labels=labels)

        # Highlight shortest path
        if shortest_path:
            path_edges = list(zip(shortest_path, shortest_path[1:]))
            nx.draw_networkx_edges(G, pos, edgelist=path_edges, edge_color='red', width=2)

        plt.title("Graph Visualization with Shortest Path")
        plt.show()

# Create graph and add edges
g = Graph()
g.add_edge('A', 'B', 4)
g.add_edge('A', 'C', 3)
g.add_edge('B', 'D', 2)
g.add_edge('C', 'D', 1)
g.add_edge('C', 'E', 5)
g.add_edge('D', 'E', 2)

# Run DLS
src, dest, depth_limit = 'A', 'E', 3
shortest_path, distance = g.dls(src, dest, depth_limit)

# Display results
if shortest_path:
    print(f"Shortest path: {' -> '.join(shortest_path)} with distance {distance}")
else:
    print(f"No path found within depth limit {depth_limit}")

# Draw the graph
g.draw_graph(shortest_path)
