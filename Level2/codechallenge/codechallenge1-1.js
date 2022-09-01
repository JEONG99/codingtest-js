//월간 코드 챌린지 시즌1 - 삼각 달팽이

function solution(n) {
  let result = [];
  const snail = Array.from(Array(n), (_, k) => new Array(k + 1).fill(0));
  let xPos = 0;
  let yPos = -1;
  let count = 1;
  while (n > 0) {
    for (let i = 0; i < n; i++) {
      yPos++;
      snail[yPos][xPos] = count;
      count++;
    }
    for (let i = 0; i < n - 1; i++) {
      xPos++;
      snail[yPos][xPos] = count;
      count++;
    }
    for (let i = 0; i < n - 2; i++) {
      yPos--;
      xPos--;
      snail[yPos][xPos] = count;
      count++;
    }
    n -= 3;
  }
  for (el of snail) {
    result = result.concat(...el);
  }
  return result;
}

solution(10);
