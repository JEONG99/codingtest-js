const getCombinations = (array) => {
  const result = [];
  if (array.length === 1) {
    return [array];
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.filter((v) => v !== fixed);
    const combinations = getCombinations(rest);
    const attached = combinations.map((combi) => [fixed, ...combi]);
    result.push(...attached);
  });
  return result;
};

function solution(k, dungeons) {
  let combinations = Array.from(new Array(dungeons.length), (v, i) => i);
  combinations = getCombinations(combinations);
  let result = [];
  for (combi of combinations) {
    let rest = k;
    let count = 0;
    for (index of combi) {
      const [min, minus] = dungeons[index];
      if (rest < min) {
        result.push(count);
        break;
      } else {
        rest -= minus;
        count++;
      }
    }
    if (count === dungeons.length) {
      return count;
    }
  }
  return Math.max(...result);
}
