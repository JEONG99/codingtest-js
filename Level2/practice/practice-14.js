//연습문제 - 최솟값 구하기

function solution(A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);
  return sortedA.reduce((prev, v, i) => prev + v * sortedB[i], 0);
}
