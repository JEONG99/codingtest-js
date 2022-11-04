//연습문제 - 숫자 블록

const begin = 1;
const end = 10;

function solution(begin, end) {
  let result = [end - begin + 1].fill(1);

  if (begin === 1) {
    result[0] = 0;
    for (let i = begin + 1; i <= end; i++) {
      let num = 1;
      for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
        if (i % j === 0 && i / j <= 10000000) {
          num = i / j;
          break;
        }
      }
      result[i - begin] = num;
    }
  } else {
    for (let i = begin; i <= end; i++) {
      let num = 1;
      for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
        if (i % j === 0 && i / j <= 10000000) {
          num = i / j;
          break;
        }
      }
      result[i - begin] = num;
    }
  }
  return result;
}
