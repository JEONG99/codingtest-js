//깊이/너비 우선 탐색 - 타겟 넘버

const numbers = [4, 1, 2, 1];
const target = 4;

function solution(numbers, target) {
  let result = 0;
  const dfs = (level, sum) => {
    console.log(sum);
    if (level === numbers.length) {
      if (sum === target) {
        result++;
      }
      return;
    }

    dfs(level + 1, sum + numbers[level]);
    dfs(level + 1, sum - numbers[level]);
  };
  dfs(0, 0);
  return result;
}

solution(numbers, target);
