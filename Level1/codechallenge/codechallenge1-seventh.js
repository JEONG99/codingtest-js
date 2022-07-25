//월간 코드 챌린지 시즌1 - 3진법 뒤집기

const n = 45;

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

console.log(solution(n));
