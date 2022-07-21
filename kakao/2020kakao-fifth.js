//2020 카카오 인턴십 - 키패드 누르기
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = "right";

let leftThumb = {
  row: 3,
  col: 0,
};
let rightThumb = {
  row: 3,
  col: 2,
};

const result = numbers.map((number) => {
  const numberIndex = number === 0 ? 10 : number - 1;
  const row = parseInt(numberIndex / 3);
  const col = numberIndex % 3;
  if (col === 0) {
    //left
    leftThumb.row = row;
    leftThumb.col = col;
    return "L";
  } else if (col === 2) {
    //right
    rightThumb.row = row;
    rightThumb.col = col;
    return "R";
  } else {
    const leftThumbDistance =
      Math.abs(leftThumb.row - row) + Math.abs(leftThumb.col - col);
    const rightThumbDistance =
      Math.abs(rightThumb.row - row) + Math.abs(rightThumb.col - col);
    const leftMinusRight = leftThumbDistance - rightThumbDistance;
    if (leftMinusRight > 0 || (leftMinusRight === 0 && hand === "right")) {
      rightThumb.row = row;
      rightThumb.col = col;
      return "R";
    } else {
      leftThumb.row = row;
      leftThumb.col = col;
      return "L";
    }
  }
});
