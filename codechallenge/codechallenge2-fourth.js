//월간 코드 챌린지 시즌2 - 약수의 개수와 덧셈

const left = 24;
const right = 27;

let result = 0;
for (let num = left; num <= right; num++) {
  Number.isInteger(Math.sqrt(num)) ? (result -= num) : (result += num);
}
console.log(result);
