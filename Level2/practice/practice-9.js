//연습문제 - 롤케이크 자르기

const topping = [1, 2, 1, 3, 1, 4, 1, 2];

function solution(topping) {
  let result = 0;
  if (topping.length === 1) {
    return result;
  }
  const me = new Map();
  const brother = new Map();
  me.set(topping.shift(), 1);
  for (const v of topping) {
    if (brother.has(v)) {
      brother.set(v, brother.get(v) + 1);
    } else {
      brother.set(v, 1);
    }
  }

  let myTopping = 1;
  let brotherTopping = brother.size;
  if (myTopping === brotherTopping) result++;
  topping.pop();

  for (const v of topping) {
    if (me.has(v)) {
      me.set(v, me.get(v) + 1);
    } else {
      me.set(v, 1);
      myTopping++;
    }
    if (brother.get(v) === 1) {
      brotherTopping--;
    } else {
      brother.set(v, brother.get(v) - 1);
    }
    if (myTopping === brotherTopping) result++;
  }

  return result;
}
