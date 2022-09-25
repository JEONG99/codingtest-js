//월간 코드 챌린지 시즌3 - n^2 배열 자르기

function solution(n, left, right) {
  let array = Array(n * n).fill(0);
  let index = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      array[index] = i;
      index++;
    }
    for (let k = i + 1; k <= n; k++) {
      array[index] = k;
      index++;
    }
  }
  return array.slice(left, right + 1);
}

console.log(solution(4, 7, 14));
