//Summer/Winter Coding(~2018) - 점프와 순간 이동

function solution(N) {
  let result = 0;
  while (N > 0) {
    if (N % 2 === 0) {
      N /= 2;
    } else {
      N -= 1;
      result++;
    }
  }
  return result;
}
console.log(solution(5));
