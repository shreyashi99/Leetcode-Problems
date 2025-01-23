/**
1267. Count Servers that Communicate
 You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that on that cell there is a server and 0 means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.

Return the number of servers that communicate with any other server.
 */
function countServers(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rowCount = new Array(m).fill(0);
    const colCount = new Array(n).fill(0);

    // Count the number of servers in each row and column
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    let count = 0;

    // Count servers that can communicate
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
                count++;
            }
        }
    }

    return count;
}

// Example usage
const grid = [
    [1, 0],
    [0, 1]
];
console.log(countServers(grid)); // Output: 0

const grid2 = [
    [1, 0],
    [1, 1]
];
console.log(countServers(grid2)); // Output: 3