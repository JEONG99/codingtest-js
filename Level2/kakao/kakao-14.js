//2019 KAKAO BLIND RECRUITMENT - 후보키

const relation = [
  ["100", "100", "ryan", "music", "2"],
  ["200", "200", "apeach", "math", "2"],
  ["300", "300", "tube", "computer", "3"],
  ["400", "400", "con", "computer", "4"],
  ["500", "500", "muzi", "music", "3"],
  ["600", "600", "apeach", "music", "2"],
];

const getCombinations = (order, num) => {
  const result = [];
  if (num === 1) {
    return order.map((menu) => [menu]);
  }
  order.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, num - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  });
  return result;
};

function solution(relation) {
  const modi = [...relation];
  for (let i = 0; i < relation[0].length; i++) {
    for (let j = 0; j < relation.length; j++) {
      modi[j][i] += String(i);
    }
  }
  const result = [];
  for (let i = 1; i <= modi[0].length; i++) {
    const temp = [];
    for (let j = 0; j < modi.length; j++) {
      temp.push(getCombinations(modi[j], i));
    }
    for (let j = 0; j < temp[0].length; j++) {
      const set = new Set();
      for (let k = 0; k < temp.length; k++) {
        set.add(temp[k][j].join(""));
      }
      if (set.size === temp.length) {
        result.push(temp[0][j]);
      }
    }
  }
  const anwser = [];
  result.sort((a, b) => a.length - b.length);
  for (let i = 0; i < result.length; i++) {
    const flagList = [];
    for (let j = 0; j < anwser.length; j++) {
      let flag = false;
      anwser[j].map((el) => {
        if (!result[i].includes(el)) {
          flag = true;
        }
      });
      flagList.push(flag);
    }
    if (flagList.some((el) => !el)) continue;
    anwser.push(result[i]);
  }
  return anwser.length;
}

console.log(solution(relation));
