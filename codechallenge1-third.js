//월간 코드 챌린지 시즌1 - 두 개 뽑아서 더하기

const numbers = [2, 1, 3, 4, 1];
let result = new Array();

numbers.map((number, index, numbers) => {
  for (let i = index + 1; i < numbers.length; i++) {
    result.push(number + numbers[i]);
  }
  return;
});

result = Array.from(new Set(result)).sort((a, b) => a - b);
