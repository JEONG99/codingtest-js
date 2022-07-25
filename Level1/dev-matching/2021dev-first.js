//2021 Dev-Matching - 로또의 최고 순위와 최저 순위

const lottos = [0, 31, 11, 9, 7, 5];
const winNums = [31, 10, 45, 1, 6, 19];

let correctNum = 0;
let zeroCount = 0;

lottos.forEach((value) => {
  if (value === 0) {
    zeroCount++;
  } else {
    winNums.includes(value) ? correctNum++ : null;
  }
});

console.log([
  correctNum === 0 && zeroCount === 0 ? 6 : 7 - (correctNum + zeroCount),
  correctNum === 0 ? 6 : 7 - correctNum,
]);
