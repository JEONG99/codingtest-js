//연습문제 - JadenCase 문자열 만들기

function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      const first = word.charAt(0).toUpperCase();
      return first + word.slice(1).toLowerCase();
    })
    .join(" ");
}
