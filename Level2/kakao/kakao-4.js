//2021카카오 채용연계형 인턴십 - 거리두기 확인하기

const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];

function solution(places) {
  const result = places.map((place) => {
    const whereP = [];
    let map = new Array(5);
    place.forEach((row, i) => {
      map[i] = row.split("");
      row.split("").forEach((value, j) => {
        if (value === "P") {
          whereP.push([i, j]);
        }
      });
    });
    if (whereP.length <= 1) {
      return 1;
    }
    for (let i = 0; i < whereP.length - 1; i++) {
      for (let j = i + 1; j < whereP.length; j++) {
        const length =
          Math.abs(whereP[i][0] - whereP[j][0]) +
          Math.abs(whereP[i][1] - whereP[j][1]);
        if (length <= 2) {
          if (length <= 1) {
            return 0;
          }
          if (whereP[i][0] === whereP[j][0]) {
            if (map[whereP[i][0]][(whereP[i][1] + whereP[j][1]) / 2] === "O") {
              return 0;
            }
          } else if (whereP[i][1] === whereP[j][1]) {
            if (map[(whereP[i][0] + whereP[j][0]) / 2][whereP[i][1]] === "O") {
              return 0;
            }
          } else {
            if (
              map[whereP[i][0]][whereP[j][1]] === "O" ||
              map[whereP[j][0]][whereP[i][1]] === "O"
            ) {
              return 0;
            }
          }
        }
      }
    }
    return 1;
  });
  return result;
}
console.log(solution(places));
