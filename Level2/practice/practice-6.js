//연습문제 - 다음 큰 숫자

function solution(n) {
  const numbersOne = n
    .toString(2)
    .split("")
    .filter((v) => v === "1").length;
  let i = n + 1;
  while (true) {
    if (
      i
        .toString(2)
        .split("")
        .filter((v) => v === "1").length === numbersOne
    ) {
      return i;
    }
    i++;
  }
}
