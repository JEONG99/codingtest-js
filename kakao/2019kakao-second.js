//2019 카카오 개발자 겨울 인턴십 - 크레인 인형뽑기 게임
let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

let count = 0;
let arr = [];
for (let i of moves) {
  let value;
  for (let j = 0; j < board.length; j++) {
    if (board[j][i - 1] !== 0) {
      value = board[j][i - 1];
      arr.push(value);
      board[j][i - 1] = 0;
      break;
    }
  }
  if (arr.length > 1) {
    if (arr[arr.length - 1] === arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
      count += 2;
    }
  }
}
console.log(count);
