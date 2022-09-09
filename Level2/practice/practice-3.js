//연습문제 - 멀리 뛰기

function solution(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  let dpTable = Array(n + 1).fill(0);
  dpTable[1] = 1;
  dpTable[2] = 2;
  for (let i = 3; i <= n; i++) {
    dpTable[i] = (dpTable[i - 1] + dpTable[i - 2]) % 1234567;
  }
  return dpTable[n];
}

console.log(solution(3));
