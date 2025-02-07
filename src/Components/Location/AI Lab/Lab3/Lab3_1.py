from collections import deque
import matplotlib.pyplot as plt
import numpy as np

def createMaze():
    maze = []
    maze.append(["#", "#", "#", "#", "#", "O", "#"])
    maze.append(["#", " ", " ", " ", "#", " ", "#"])
    maze.append(["#", " ", "#", " ", "#", " ", "#"])
    maze.append(["#", " ", "#", " ", " ", " ", "#"])
    maze.append(["#", " ", "#", "#", "#", " ", "#"])
    maze.append(["#", " ", " ", " ", "#", " ", "#"])
    maze.append(["#", "#", "#", "#", "#", "X", "#"])
    return maze

def createMaze2():
    maze = []
    maze.append(["#", "#", "#", "#", "#", "O", "#", "#", "#"])
    maze.append(["#", " ", " ", " ", " ", " ", " ", " ", "#"])
    maze.append(["#", " ", "#", "#", " ", "#", "#", " ", "#"])
    maze.append(["#", " ", "#", " ", " ", " ", "#", " ", "#"])
    maze.append(["#", " ", "#", " ", "#", " ", "#", " ", "#"])
    maze.append(["#", " ", "#", " ", "#", " ", "#", " ", "#"])
    maze.append(["#", " ", "#", " ", "#", " ", "#", "#", "#"])    
    maze.append(["#", " ", " ", " ", " ", " ", " ", " ", "#"])
    maze.append(["#", "#", "#", "#", "#", "#", "#", "X", "#"])
    return maze

def find_start(maze):
    for i in range(len(maze)):
        for j in range(len(maze[0])):
            if maze[i][j] == "O":
                return i, j
    return None

def find_end(maze):
    for i in range(len(maze)):
        for j in range(len(maze[0])):
            if maze[i][j] == "X":
                return i, j
    return None

def get_path_coordinates(maze, path):
    start_i, start_j = find_start(maze)
    
    coordinates = [(start_i, start_j)]
    i, j = start_i, start_j
    
    for move in path:
        if move == "L":
            j -= 1
        elif move == "R":
            j += 1
        elif move == "U":
            i -= 1
        elif move == "D":
            i += 1
        coordinates.append((i, j))
    
    return coordinates

def printMaze(maze, path=""):
    coordinates = get_path_coordinates(maze, path)
    
    for i, row in enumerate(maze):
        for j, col in enumerate(row):
            if (i, j) in coordinates:
                print("+ ", end="")
            else:
                print(col + " ", end="")
        print()

def valid(maze, moves):
    start_i, start_j = find_start(maze)
    i, j = start_i, start_j

    for move in moves:
        if move == "L":
            j -= 1
        elif move == "R":
            j += 1
        elif move == "U":
            i -= 1
        elif move == "D":
            i += 1

        if not (0 <= i < len(maze) and 0 <= j < len(maze[0])):
            return False
        elif maze[i][j] == "#":
            return False

    return True

def findEnd(maze, moves):
    start_i, start_j = find_start(maze)
    end_i, end_j = find_end(maze)
    
    i, j = start_i, start_j
    
    for move in moves:
        if move == "L":
            j -= 1
        elif move == "R":
            j += 1
        elif move == "U":
            i -= 1
        elif move == "D":
            i += 1

    if (i, j) == (end_i, end_j):
        print("\nSolution found: " + moves)
        printMaze(maze, moves)
        plot_maze_with_path(maze, get_path_coordinates(maze, moves))
        return True

    return False

def plot_maze_with_path(maze, path_coords):
    rows, cols = len(maze), len(maze[0])
    
    # Create a numeric grid for plotting
    grid = np.zeros((rows, cols))
    for i in range(rows):
        for j in range(cols):
            if maze[i][j] == "#":
                grid[i][j] = 1
            elif maze[i][j] in ["O", "X"]:
                grid[i][j] = 0.5

    # Create the plot
    fig, ax = plt.subplots(figsize=(10, 10))
    ax.imshow(grid, cmap='binary')
    
    # Plot the path
    path_y, path_x = zip(*path_coords)
    ax.plot(path_x, path_y, 'g-', linewidth=3, label='Path')
    
    # Mark start and end points
    ax.plot(path_x[0], path_y[0], 'go', markersize=15, label='Start')
    ax.plot(path_x[-1], path_y[-1], 'ro', markersize=15, label='End')
    
    # Customize the plot
    ax.grid(True, which='both', color='gray', linewidth=0.5)
    ax.set_xticks(np.arange(-0.5, cols, 1), minor=True)
    ax.set_yticks(np.arange(-0.5, rows, 1), minor=True)
    ax.set_xticks([])
    ax.set_yticks([])
    ax.legend(loc='upper center', bbox_to_anchor=(0.5, -0.05), ncol=3)
    plt.title("Maze Solution using BFS", pad=20)
    plt.tight_layout()
    plt.show()

def main():
    # Ask user which maze to solve
    print("Choose maze to solve:")
    print("1. Simple Maze")
    print("2. Complex Maze")
    choice = input("Enter 1 or 2: ")
    
    maze = createMaze() if choice == "1" else createMaze2()
    
    print("\nInitial Maze:")
    printMaze(maze)
    
    print("\nSearching for solution...")
    queue = deque([""])
    visited = set()

    solution_found = False
    while queue and not solution_found:
        path = queue.popleft()
        if path in visited:
            continue
        visited.add(path)

        if findEnd(maze, path):
            solution_found = True
            break

        for direction in ["L", "R", "U", "D"]:
            new_path = path + direction
            if valid(maze, new_path):
                queue.append(new_path)
    
    if not solution_found:
        print("\nNo solution found!")

if __name__ == "__main__":
    main()


