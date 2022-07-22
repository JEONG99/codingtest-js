//위클리 챌린지 - 부족한 금액 계산하기

const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
  let result = 0;
  for (let i = 0; i < count; i++) {
    result += price * (i + 1);
  }
  return result - money > 0 ? result - money : 0;
}
