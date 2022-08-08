//2018 KAKAO BLIND RECRUITMENT - n진수 게임

const n = 16;
const t = 16;
const m = 2;
const p = 1;

function solution(n, t, m, p) {
  const result = [];
  let i = 1;
  let current = [];
  let num = 0;
  while (result.length !== t) {
    if (!current.length) {
      current = num.toString(n).split("");
      num++;
    }
    const value = current.shift();
    if (i === p) {
      result.push(value);
    }
    i++;
    if (i > m) {
      i = 1;
    }
  }
  return result.join("").toLocaleUpperCase();
}

console.log(solution(n, t, m, p));
