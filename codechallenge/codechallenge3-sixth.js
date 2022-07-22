//월간 코드 챌린지 시즌3 - 나머지가 1이 되는 수 찾기

function solution() {
  const n = 30;

  for (let i = 2; i <= n - 1; i++) {
    if ((n - 1) % i === 0) {
      return i;
    }
  }
}

console.log(solution());
