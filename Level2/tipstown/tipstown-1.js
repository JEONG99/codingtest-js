//2017 팁스타운 - 예상 대진표

function solution(N, A, B) {
  let round = 1;
  while (Math.abs(A - B) !== 1 || parseInt((A + B) / 2) % 2 === 0) {
    A = parseInt((A + 1) / 2);
    B = parseInt((B + 1) / 2);
    round++;
  }
  return round;
}

console.log(solution(8, 4, 7));

/*
1 2 3 4 5 6 7 8
 1   2   3   4
   1       2
*/
