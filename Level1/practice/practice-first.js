//연습 문제 - 문자열 내 p와 y의 개수

const s = "pPopoyY";

function solution(s) {
  const upper = s.toUpperCase();
  return upper.split("P").length === upper.split("Y").length;
}

console.log(solution(s));
