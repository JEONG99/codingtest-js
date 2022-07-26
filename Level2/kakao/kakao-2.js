//2021 KAKAO BLIND REQUITMENT - 메뉴 리뉴얼

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];

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

function solution(orders, course) {
  const result = [];
  const combination = new Map();

  for (const courseNum of course) {
    let max = 0;
    for (const order of orders) {
      getCombinations(order.split("").sort(), courseNum).map((value) => {
        const courseMenu = value.join("");
        if (combination.has(courseMenu)) {
          combination.set(courseMenu, combination.get(courseMenu) + 1);
          max =
            max < combination.get(courseMenu)
              ? combination.get(courseMenu)
              : max;
        } else {
          combination.set(courseMenu, 1);
        }
      });
    }
    if (max >= 2) {
      combination.forEach((value, key) => {
        if (value === max) {
          result.push(key);
        }
      });
    }
    combination.clear();
  }
  return result.sort();
}

console.log(solution(orders, course));
