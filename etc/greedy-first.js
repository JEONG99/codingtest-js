//그리디 - 체육복

const n = 5;
const lost = [1, 2, 3, 4, 5];
const reserve = [1, 4, 5];

function solution(n, lost, reserve) {
  let newLost = lost
    .filter((num) => !reserve.includes(num))
    .sort((a, b) => a - b);
  let newReserver = reserve
    .filter((num) => !lost.includes(num))
    .sort((a, b) => a - b);

  newLost = newLost.filter((num) => {
    if (newReserver.includes(num - 1)) {
      newReserver = newReserver.filter((value) => value !== num - 1);
      return false;
    } else if (newReserver.includes(num + 1)) {
      newReserver = newReserver.filter((value) => value !== num + 1);
      return false;
    } else {
      return true;
    }
  });
  return newLost;
}

console.log(solution(n, lost, reserve));
