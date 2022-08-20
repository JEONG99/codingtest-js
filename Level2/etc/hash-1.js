//해시 - 위장

const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

/*
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
*/

function solution(clothes) {
  const map = new Map();
  clothes.forEach(([name, type]) => {
    if (map.has(type)) {
      map.set(type, [...map.get(type), name]);
    } else {
      map.set(type, [name]);
    }
  });

  let result = 1;
  for (const type of map.keys()) {
    result *= map.get(type).length + 1;
  }
  return result - 1;
}

console.log(solution(clothes));
