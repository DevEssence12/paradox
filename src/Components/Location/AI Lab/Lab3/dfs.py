from collections import deque
import matplotlib.pyplot as plt
import numpy as np

def createMaze():
    maze = []
    maze.append(["#", "#", "#", "#", "#", "O", "#", "#", "#"])
    maze.append(["#", " ", " ", " ", " ", " ", "#", " ", "#"])
    maze.append(["#", " ", "#", "#", "#", " ", "#", " ", "#"])
    maze.append(["#", " ", "#", " ", "#", " ", "#", " ", "#"])
    maze.append(["#", " ", "#", " ", "#", " ", "#", "#", "#"])
    maze.append(["#", " ", " ", " ", " ", " ", " ", " ", "#"])
    maze.append(["#", "#", "#", "#", "#", "#", " ", "X", "#"])
    return maze

def printMaze(maze, path=""):
    start = None454444444444444444
    for x, pos in enumerate(maze[0]):
        if pos == "O":
            start = (0, x)
            break
    i, j = start
    positions = [(i, j)]
    for move in path:
        if move == "L":
            j -= 1
        elif move == "R":
            j += 1
        elif move == "U":
            i -= 1
        elif move == "D":
            i += 1
        positions.append((i, j))
    for i, row in enumerate(maze):
        for j, col in enumerate(row):
            if (i, j) in positions:
                print("+ ", end="")
            else:
                print(col + " ", end="")
        print()

def valid(maze, x, y):
    if 0 <= x < len(maze) and 0 <= y < len(maze[0]) and maze[x][y] in [" ", "X"]:
        return True
    return False

def dfs(maze, x, y, path, visited):
    if maze[x][y] == "X":
        return True

    visited.add((x, y))

    moves = [(0, -1, "L"), (0, 1, "R"), (-1, 0, "U"), (1, 0, "D")]

    for dx, dy, move in moves:
        nx, ny = x + dx, y + dy
        if valid(maze, nx, ny) and (nx, ny) not in visited:
            path.append(move)
            if dfs(maze, nx, ny, path, visited):
                return True
            path.pop()

    return False

def plot_maze_with_path(maze, moves):
    rows, cols = len(maze), len(maze[0])
    grid = np.array([[1 if cell in ["O", " ", "X"] else 0 for cell in row] for row in maze])

    start = None
    for x, pos in enumerate(maze[0]):
        if pos == "O":
            start = (0, x)
            break
    i, j = start
    path = [(i, j)]
    for move in moves:
        if move == "L":
            j -= 1
        elif move == "R":
            j += 1
        elif move == "U":
            i -= 1
        elif move == "D":
            i += 1
        path.append((i, j))
    fig, ax = plt.subplots(figsize=(8, 8))
    ax.imshow(grid, cmap="binary", origin="upper")
    for x, y in path:
        ax.add_patch(plt.Rectangle((y - 0.5, x - 0.5), 1, 1, color="green", alpha=0.5))
    ax.scatter(path[0][1], path[0][0], color="blue", s=100, label="Start")
    ax.scatter(path[-1][1], path[-1][0], color="red", s=100, label="End")
    ax.set_xticks(np.arange(-0.5, cols, 1), minor=True)
    ax.set_yticks(np.arange(-0.5, rows, 1), minor=True)
    ax.grid(which="minor", color="gray", linestyle="-", linewidth=0.5)
    ax.set_xticks([])
    ax.set_yticks([])
    ax.legend()
    plt.title("Maze with Solution Path")
    plt.show()

def main():
    maze = createMaze()
    path = []
    visited = set()

    start = None
    for x, pos in enumerate(maze[0]):
        if pos == "O":
            start = (0, x)
            break

    if dfs(maze, start[0], start[1], path, visited):
        print("Found path:", "".join(path))
        printMaze(maze, "".join(path))
        plot_maze_with_path(maze, path)
    else:
        print("No path found!")

main()
