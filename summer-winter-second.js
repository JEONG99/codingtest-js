//Summer/Winter Coding(~2018) - 예산
const d = [1, 3, 2, 5, 4];
const budget = 15;

d.sort((a, b) => a - b);
let sum = 0;
let result;
for (const i in d) {
  sum += d[i];
  if (sum > budget) {
    result = parseInt(i);
    break;
  }
  result = parseInt(i) + 1;
}
console.log(result);
