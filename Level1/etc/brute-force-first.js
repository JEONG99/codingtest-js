//완전 탐색 - 모의고사

const answers = [1, 2, 3, 4, 5, 4];

function solution(answers) {
  const supoOne = [1, 2, 3, 4, 5];
  const supoTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  const supoThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (supoOne[i % 5] === answers[i]) {
      result[0]++;
    }
    if (supoTwo[i % 8] === answers[i]) {
      result[1]++;
    }
    if (supoThree[i % 10] === answers[i]) {
      result[2]++;
    }
  }

  const answer = [];
  const max = Math.max(...result);
  for (let i = 0; i < 3; i++) {
    if (result[i] === max) {
      answer.push(i + 1);
    }
  }
  return answer;
}

console.log(solution(answers));
