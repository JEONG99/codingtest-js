//2021 Dev-Matching - 행렬 테두리 회전하기

const rows = 6;
const columns = 6;
const queries = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];

function solution(rows, columns, queries) {
  let num = 1;
  let box = Array.from(Array(rows), () => Array(columns).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      box[i][j] = num;
      num++;
    }
  }
  const result = queries.map((query) => {
    const [startX, startY, endX, endY] = query;
    let i = startX - 1;
    let j = startY - 1;
    let minNum = box[i][j];
    let currentNum = minNum;
    while (j < endY - 1) {
      j++;
      const nextNum = box[i][j];
      minNum = minNum < nextNum ? minNum : nextNum;
      box[i][j] = currentNum;
      currentNum = nextNum;
    }
    while (i < endX - 1) {
      i++;
      const nextNum = box[i][j];
      minNum = minNum < nextNum ? minNum : nextNum;
      box[i][j] = currentNum;
      currentNum = nextNum;
    }
    while (startY - 1 < j) {
      j--;
      const nextNum = box[i][j];
      minNum = minNum < nextNum ? minNum : nextNum;
      box[i][j] = currentNum;
      currentNum = nextNum;
    }
    while (startX - 1 < i) {
      i--;
      const nextNum = box[i][j];
      minNum = minNum < nextNum ? minNum : nextNum;
      box[i][j] = currentNum;
      currentNum = nextNum;
    }
    return minNum;
  });
  return result;
}

solution(rows, columns, queries);
