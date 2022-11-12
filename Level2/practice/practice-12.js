//할인 행사

const checkItems = (map, number) => {
  const values = [];
  for (const [key, value] of map.entries()) {
    values.push(value);
  }
  for (let i = 0; i < number.length; i++) {
    if (values[i] !== number[i]) return false;
  }
  return true;
};

function solution(want, number, discount) {
  const map = new Map();
  let result = 0;
  for (const item of want) {
    map.set(item, 0);
  }
  for (let i = 0; i < 10; i++) {
    if (map.has(discount[i])) {
      map.set(discount[i], map.get(discount[i]) + 1);
    }
  }
  if (checkItems(map, number)) result++;

  for (let i = 0; i < discount.length - 10; i++) {
    if (map.has(discount[i])) {
      map.set(discount[i], map.get(discount[i]) - 1);
    }
    if (map.has(discount[i + 10])) {
      map.set(discount[i + 10], map.get(discount[i + 10]) + 1);
    }
    if (checkItems(map, number)) result++;
  }
  return result;
}
