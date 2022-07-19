//2019 KAKAO BLIND RECRUITMENT - 실패율

const stages = [2, 1, 2, 6, 2, 4, 3, 3];
const N = 5;
let peopleOnStages = new Array(N + 1).fill(0);
let peopleNum = stages.length;

stages.map((i) => {
  peopleOnStages[i - 1] += 1;
});
peopleOnStages.pop();
const result = peopleOnStages.map((value, index) => {
  const stage = [index + 1, value / peopleNum];
  peopleNum -= value;
  return stage;
});
result.sort((a, b) => b[1] - a[1]);

console.log(
  result.map((value) => {
    return value[0];
  })
);
