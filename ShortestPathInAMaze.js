/** You are given a maze represented as a grid of 0s (open paths) and 1s (walls). 
 * Find the shortest path from the top-left corner to the bottom-right corner. 
 * Return the number of steps in the shortest path. If no path exists, return -1. */

function shortestPath(grid) {
    const m = grid.length, n = grid[0].length;
    if (grid[0][0] === 1 || grid[m - 1][n - 1] === 1) return -1;

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up
    const queue = [[0, 0, 1]]; // [row, col, steps]
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();

        // If the bottom-right corner is reached, return the steps
        if (x === m - 1 && y === n - 1) return steps;

        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;

            // Check bounds and if the cell is unvisited and open
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny] && grid[nx][ny] === 0) {
                visited[nx][ny] = true; // Mark as visited
                queue.push([nx, ny, steps + 1]); // Enqueue with updated steps
            }
        }
    }

    return -1; // No path found
}

// Example Usage
const maze = [
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0]
];
console.log(shortestPath(maze)); 
// Output: 7
