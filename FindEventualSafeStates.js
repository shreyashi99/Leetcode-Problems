/**There is a directed graph of n nodes with each node labeled from 0 to n - 1. 
 * The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, 
 * meaning there is an edge from node i to each node in graph[i].

A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).

Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order. */

function eventualSafeNodes(graph) {
    const n = graph.length;
    const color = Array(n).fill(0); // 0: unvisited, 1: visiting, 2: safe

    const isSafe = (node) => {
        if (color[node] !== 0) {
            return color[node] === 2; // Return true if node is already marked safe
        }

        color[node] = 1; // Mark node as visiting
        for (let neighbor of graph[node]) {
            if (color[neighbor] === 2) continue; // Safe neighbor, skip
            if (color[neighbor] === 1 || !isSafe(neighbor)) {
                return false; // Found a cycle or unsafe path
            }
        }

        color[node] = 2; // Mark node as safe
        return true;
    };

    const result = [];
    for (let i = 0; i < n; i++) {
        if (isSafe(i)) {
            result.push(i);
        }
    }

    return result;
}

// Example usage
const graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
console.log(eventualSafeNodes(graph)); // Output: [2, 4, 5, 6]
