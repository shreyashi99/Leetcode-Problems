/**
 * You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents:
A land cell if grid[r][c] = 0, or
A water cell containing grid[r][c] fish, if grid[r][c] > 0.
A fisher can start at any water cell (r, c) and can do the following operations any number of times:
Catch all the fish at cell (r, c), or
Move to any adjacent water cell.
Return the maximum number of fish the fisher can catch if he chooses his starting cell optimally, or 0 if no water cell exists.
An adjacent cell of the cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) or (r - 1, c) if it exists.
--------
Approach: DFS
1. Check the boundaries and if the cell is land
2. Mark all the visited cells as 0
3. Visit all the neighbours and perform DFS
4. Set the MaxFish
---------
 * @param {number[][]} grid
 * @return {number}
 */

var findMaxFish = function (grid) {
  let row = grid.length;
  let col = grid[0].length;
  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function CatchFish(r, c) {
    if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] === 0) {
      //Check the boundaries and if the cell is land then return 0
      return 0;
    }

    let fishCaught = grid[r][c];

    grid[r][c] = 0; // Mark all visited cells as 0

    for (let [dr, dc] of dirs) {
      fishCaught += CatchFish(r + dr, c + dc); // Visit the adjacent cells and do the recursive operations
    }

    return fishCaught;
  }

  let maxFish = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c] > 0) {
        maxFish = Math.max(maxFish, CatchFish(r, c));
      }
    }
  }
  return maxFish;
};
