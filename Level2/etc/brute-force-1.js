//완전탐색 - 카펫

const brown = 24;
const yellow = 24;

function solution(brown, yellow) {
  const numberOfTiles = brown + yellow;
  for (
    let height = 3;
    height <= Math.floor(Math.sqrt(numberOfTiles));
    height++
  ) {
    const width = numberOfTiles / height;
    if ((height - 2) * (width - 2) === yellow) {
      return [width, height];
    }
  }
}

console.log(solution(brown, yellow));
