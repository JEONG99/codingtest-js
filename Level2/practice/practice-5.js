//연습문제 - 행렬의 곱셈

const arr1 = [
  [2, 3],
  [4, 2],
];
const arr2 = [
  [5, 4, 3],
  [2, 4, 1],
];

function solution(arr1, arr2) {
  const result = arr1.map((column) => {
    const temp = [];
    for (let i = 0; i < arr2[0].length; i++) {
      temp.push(
        column.reduce(
          (prev, current, index) => prev + current * arr2[index][i],
          0
        )
      );
    }
    return temp;
  });
  return result;
}

console.log(solution(arr1, arr2));
