//2022 KAKAO BLIND RECRUITMENT - 양궁대회

const info = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
const n = 5;

function solution(n, info) {
  let max = 0;
  let result = [-1];
  const calculateScore = (
    index,
    apeachPoint,
    ryanPoint,
    usedArrow,
    scoreBoard
  ) => {
    if (usedArrow > n) {
      return;
    }
    if (index > 10) {
      if (ryanPoint - apeachPoint > max) {
        scoreBoard[10] += n - usedArrow;
        max = ryanPoint - apeachPoint;
        result = scoreBoard;
      }
      return;
    }
    if (n > usedArrow) {
      let currentBoard = [...scoreBoard];
      currentBoard[10 - index] = info[10 - index] + 1;
      calculateScore(
        index + 1,
        apeachPoint,
        ryanPoint + index,
        usedArrow + info[10 - index] + 1,
        currentBoard
      );
    }
    if (info[10 - index] > 0) {
      calculateScore(
        index + 1,
        apeachPoint + index,
        ryanPoint,
        usedArrow,
        scoreBoard
      );
    } else {
      calculateScore(index + 1, apeachPoint, ryanPoint, usedArrow, scoreBoard);
    }
  };
  calculateScore(0, 0, 0, 0, new Array(11).fill(0));
  return result;
}

console.log(solution(n, info));
