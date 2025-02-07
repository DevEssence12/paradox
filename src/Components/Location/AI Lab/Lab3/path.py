# Import required libraries
from collections import deque  # Import deque for efficient queue operations in BFS
import matplotlib.pyplot as plt  # Import pyplot for visualization
import numpy as np  # Import numpy for array operations and visualization support

def createMaze():
    # Initialize empty list to store maze structure
    maze = []
    # Create maze layout using lists where:
    # '#' represents walls
    # 'O' represents start position
    # 'X' represents end position
    # ' ' represents paths that can be traveled
    maze.append(["#", "#", "#", "#", "#", "O", "#", "#", "#"])  # Top row with start position
    maze.append(["#", " ", " ", " ", " ", " ", "#", " ", "#"])  # Open path
    maze.append(["#", " ", "#", "#", "#", " ", "#", " ", "#"])  # Path with walls
    maze.append(["#", " ", "#", " ", "#", " ", "#", " ", "#"])  # Path with walls
    maze.append(["#", " ", "#", " ", "#", " ", "#", "#", "#"])  # Path with walls
    maze.append(["#", " ", " ", " ", " ", " ", " ", " ", "#"])  # Open path
    maze.append(["#", "#", "#", "#", "#", "#", " ", "X", "#"])  # Bottom row with end position
    return maze

def printMaze(maze, path=""):
    # Find starting position marked as 'O' in the first row
    start = None
    for x, pos in enumerate(maze[0]):
        if pos == "O":
            start = (0, x)
            break

    # Convert path string to coordinates
    i, j = start
    positions = [(i, j)]  # List to store coordinates of the path
    for move in path:
        # Update position based on movement direction
        if move == "L":
            j -= 1
        elif move == "R":
            j += 1
        elif move == "U":
            i -= 1 
        elif move == "D":
            i += 1
        positions.append((i, j))

    # Print maze with path
    for i, row in enumerate(maze):
        for j, col in enumerate(row):
            # Mark path with '+' symbol
            if (i, j) in positions:
                print("+ ", end="")
            else:
                print(col + " ", end="")
        print()  # New line after each row

def valid(maze, moves):
    # Find starting position
    start = None
    for x, pos in enumerate(maze[0]):
        if pos == "O":
            start = (0, x)
            break

    # Check if sequence of moves is valid
    i, j = start
    for move in moves:
        # Update position based on movement
        if move == "L":
            j -= 1
        elif move == "R":
            j += 1
        elif move == "U":
            i -= 1
        elif move == "D":   
            i += 1

        # Check if move keeps us within maze boundaries
        if not (0 <= i < len(maze) and 0 <= j < len(maze[0])):
            return False
        # Check if we hit a wall
        if maze[i][j] == "#":
            return False

    return True

def findEnd(maze, moves):
    # Find starting position
    start = None
    for x, pos in enumerate(maze[0]):
        if pos == "O":
            start = (0, x)
            break

    # Follow the path of moves
    i, j = start
    for move in moves:
        # Update position based on movement
        if move == "L":
            j -= 1
        elif move == "R":
            j += 1  
        elif move == "U":
            i -= 1
        elif move == "D":
            i += 1

    # Check if we've reached the end ('X')
    if maze[i][j] == "X":
        print("Found path:", moves)
        return True

    return False

def plot_maze_with_path(maze, moves):
    # Get maze dimensions
    rows, cols = len(maze), len(maze[0])
    # Convert maze to binary array (1 for path, 0 for wall)
    grid = np.array([[1 if cell in ["O", " ", "X"] else 0 for cell in row] for row in maze])

    # Find start position and convert moves to coordinates
    start = None
    for x, pos in enumerate(maze[0]):
        if pos == "O":
            start = (0, x)
            break

    # Generate path coordinates
    i, j = start
    path = [(i, j)]
    for move in moves:
        # Update position based on movement
        if move == "L":
            j -= 1
        elif move == "R":
            j += 1
        elif move == "U":
            i -= 1
        elif move == "D":
            i += 1
        path.append((i, j))

    # Create plot
    fig, ax = plt.subplots(figsize=(8, 8))
    # Display maze
    ax.imshow(grid, cmap="binary", origin="upper")

    # Highlight solution path
    for x, y in path:
        ax.add_patch(plt.Rectangle((y - 0.5, x - 0.5), 1, 1, color="green", alpha=0.5))

    # Mark start and end points
    ax.scatter(path[0][1], path[0][0], color="blue", s=100, label="Start")
    ax.scatter(path[-1][1], path[-1][0], color="red", s=100, label="End")

    # Add grid lines and formatting
    ax.set_xticks(np.arange(-0.5, cols, 1), minor=True)
    ax.set_yticks(np.arange(-0.5, rows, 1), minor=True)
    ax.grid(which="minor", color="gray", linestyle="-", linewidth=0.5)
    ax.set_xticks([])
    ax.set_yticks([])
    ax.legend()
    plt.title("Maze with Solution Path")
    plt.show()

def main():
    # Create the maze
    maze = createMaze()
    # Initialize queue with empty path for BFS
    queue = deque([""])
    # Keep track of visited paths
    visited = set()

    # Breadth-First Search implementation
    while queue:
        path = queue.popleft()  # Get next path to try
        if path in visited:  # Skip if already visited
            continue 
        visited.add(path)  # Mark path as visited

        # Check if current path reaches the end
        if findEnd(maze, path):
            printMaze(maze, path)  # Print text representation
            plot_maze_with_path(maze, path)  # Show visual representation
            break

        # Try all possible moves from current position
        for direction in "LRUD":
            new_path = path + direction
            if valid(maze, new_path):
                queue.append(new_path)

# Run the program
main()