//정렬 - 가장 큰 수

const numbers = [3, 30, 34, 5, 9];

function solution(numbers) {
  const result = numbers
    .map((number) => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return result * 1 === 0 ? "0" : result;
}

console.log(solution(numbers));
