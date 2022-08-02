//2020 카카오 인턴십 - 수식 최대화

const expression = "100-200*300-500+20";

const operation = {
  "*": (a, b) => a * b,
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
};

const suits = [
  ["*", "+", "-"],
  ["*", "-", "+"],
  ["+", "*", "-"],
  ["+", "-", "*"],
  ["-", "*", "+"],
  ["-", "+", "*"],
];

function solution(expression) {
  const expArray = expression.split(/(\D)/);
  let max = 0;
  for (const suit of suits) {
    let temp = [...expArray];
    for (const ope of suit) {
      while (temp.includes(ope)) {
        const index = temp.indexOf(ope);
        const calResult = operation[ope](
          parseInt(temp[index - 1]),
          parseInt(temp[index + 1])
        );
        temp.splice(index - 1, 3, calResult);
      }
    }
    if (Math.abs(temp[0]) > max) {
      max = Math.abs(temp[0]);
    }
  }
  return max;
}
