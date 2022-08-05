//2018 KAKAO BLIND RECRUITMENT - 프렌즈4블록

const board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];
const m = 6;
const n = 6;

function solution(m, n, board) {
  let boardArray = board.map((row) => row.split(""));
  let anwser = 0;
  while (true) {
    const sameBlockList = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          boardArray[i][j] &&
          boardArray[i][j] === boardArray[i][j + 1] &&
          boardArray[i][j] === boardArray[i + 1][j] &&
          boardArray[i][j] === boardArray[i + 1][j + 1]
        ) {
          sameBlockList.push([i, j]);
        }
      }
    }
    if (!sameBlockList.length) {
      boardArray.forEach((row) => {
        row.forEach((value) => {
          if (!value) anwser++;
        });
      });
      return anwser;
    }
    sameBlockList.forEach(([i, j]) => {
      boardArray[i][j] = 0;
      boardArray[i][j + 1] = 0;
      boardArray[i + 1][j] = 0;
      boardArray[i + 1][j + 1] = 0;
    });
    for (let i = m - 1; i > 0; i--) {
      if (!boardArray[i].some((v) => !v)) continue;
      for (let j = 0; j < n; j++) {
        if (!boardArray[i][j]) {
          for (let k = i - 1; k >= 0; k--) {
            if (boardArray[k][j]) {
              boardArray[i][j] = boardArray[k][j];
              boardArray[k][j] = 0;
              break;
            }
          }
        }
      }
    }
  }
}

console.log(solution(m, n, board));
