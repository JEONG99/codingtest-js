//정렬 - K번째 수

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

const result = commands.map((command, i) => {
  let sliceArray = array.slice(command[0] - 1, command[1]);
  sliceArray.sort((a, b) => a - b);
  return sliceArray[command[2] - 1];
});
console.log(result);
