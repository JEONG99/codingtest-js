//연습문제 - 택배상자

const order = [4, 3, 1, 2, 5];

function solution(order) {
  const stackMain = [];
  const stackSub = [];
  let result = 0;

  for (let i = order.length; i > 0; i--) {
    stackMain.push(i);
  }

  for (let i = 1; i < order[0]; i++) {
    stackSub.push(stackMain.pop());
  }
  stackMain.pop();
  result++;
  order.shift();

  for (const v of order) {
    const mainLast = stackMain[stackMain.length - 1];
    const subLast = stackSub[stackSub.length - 1];

    if (v < subLast) {
      break;
    }
    if (v === mainLast) {
      stackMain.pop();
      result++;
    }
    if (v === subLast) {
      stackSub.pop();
      result++;
    }
    if (v > mainLast) {
      for (let i = 0; i < v - mainLast; i++) {
        stackSub.push(stackMain.pop());
      }
      stackMain.pop();
      result++;
    }
  }
  return result;
}
