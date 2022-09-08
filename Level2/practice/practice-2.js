//연습문제 - 숫자의 표현

function solution(n) {
  if (n == 1) {
    return 1;
  }
  let result = 0;
  const num = Math.ceil(n / 2);
  for (let i = 1; i <= num; i++) {
    if (n % i === 0 && i % 2 !== 0) result++;
  }
  return n % 2 === 0 ? result : result + 1;
}

console.log(solution(1));
