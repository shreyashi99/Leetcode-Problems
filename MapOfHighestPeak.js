function highestPeak(isWater) {
    const m = isWater.length;      // Number of rows
    const n = isWater[0].length;   // Number of columns
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Adjacency directions
    
    // Initialize height matrix and BFS queue
    const height = Array.from({ length: m }, () => Array(n).fill(-1));
    const queue = [];

    // Add all water cells to the queue and set their height to 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]); // Enqueue all water cells
            }
        }
    }

    // Multi-source BFS
    let index = 0;
    while (index < queue.length) {
        const [x, y] = queue[index++];
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            // If the neighbor is valid and unvisited
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] === -1) {
                height[nx][ny] = height[x][y] + 1; // Assign height
                queue.push([nx, ny]); // Enqueue the neighbor
            }
        }
    }

    return height;
}

// Example Test Cases
console.log(highestPeak([[0, 1], [0, 0]])); 
// Output: [[1, 0], [2, 1]]

console.log(highestPeak([[0, 0, 1], [1, 0, 0], [0, 0, 0]])); 
// Output: [[1, 1, 0], [0, 1, 2], [1, 2, 3]]

console.log(highestPeak([[1]])); 
// Output: [[0]]

console.log(highestPeak([[0]])); 
// Output: [[-1]] (edge case with no water cells)

console.log(highestPeak([[0, 0], [0, 0]])); 
// Output: [[-1, -1], [-1, -1]] (edge case with no water cells)
