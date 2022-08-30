//탐욕법(Greedy) - 조이스틱

const name = "AAALAAAAAA";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const move = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3,
  2, 1,
];

function solution(name) {
  let result = 0;
  let length = name.length;
  let benefit = [length - 1];
  for (let i = 0; i < length; i++) {
    result += move[alphabet.indexOf(name[i])];
  }
  for (let startOfA = 0; startOfA < length; startOfA++) {
    let endOfA = startOfA + 1;
    while (endOfA < length && name[endOfA] === "A") endOfA++;
    const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA];
    benefit.push(moveToStartOfA * 2 + moveToEndOfA);
    benefit.push(moveToEndOfA * 2 + moveToStartOfA);
  }
  return result + Math.min(...benefit);
}

console.log(solution(name));
