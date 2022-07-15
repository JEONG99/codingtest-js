//월간 코드 챌린지 시즌 3  - 없는 숫자 더하기

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
let result = 0;

result = numbers.reduce((result, value) => (result += value));
console.log(result);
