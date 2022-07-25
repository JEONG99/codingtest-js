//월간 코드 챌린지 시즌1 - 내적

const a = [1, 2, 3, 4];
const b = [-3, 1, 3, 5];

const result = a.reduce(
  (result, value, index) => (result += value * b[index]),
  0
);
console.log(result);
