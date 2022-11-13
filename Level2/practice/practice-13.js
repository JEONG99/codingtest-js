function solution(board) {
  const row = board.length;
  const column = board[0].length;
  if (row === 1) {
    for (let i = 0; i < column; i++) {
      if (board[0][i]) return 1;
    }
    return 0;
  }
  if (column === 1) {
    for (let i = 0; i < row; i++) {
      if (board[i][0]) return 1;
    }
    return 0;
  }

  let result = 0;
  let dp = Array.from(new Array(row), () => Array(column).fill(0));
  for (let i = 0; i < row; i++) {
    if (board[i][0]) {
      dp[i][0] = 1;
    }
  }
  for (let j = 0; j < column; j++) {
    if (board[0][j]) {
      dp[0][j] = 1;
    }
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (board[i][j]) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
        result = Math.max(result, dp[i][j]);
      }
    }
  }
  return result * result;
}
