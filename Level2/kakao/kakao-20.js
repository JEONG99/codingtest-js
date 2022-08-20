//2022 KAKAO TECH INTERNSHIP - 두 큐 합 같게 만들기

//1 2 1 2 -> 1 2 1 2 1 1 10 -> 10
//1 1 10 2 ->  2 -> 2 1 2 1 2 1 1

const queue1 = [1, 2, 7, 2];
const queue2 = [4, 6, 5, 1];

function solution(queue1, queue2) {
  let sum1 = queue1.reduce((a, v) => a + v, 0);
  let sum2 = queue2.reduce((a, v) => a + v, 0);
  let count = 0;
  const len = queue1.length;
  if ((sum1 + sum2) % 2 !== 0) return -1;

  while (true) {
    if (count > (len - 1) * 3) return -1;
    if (sum1 > sum2) {
      const num = queue1.shift();
      queue2.push(num);
      sum1 -= num;
      sum2 += num;
      count++;
    } else if (sum1 < sum2) {
      const num = queue2.shift();
      queue1.push(num);
      sum1 += num;
      sum2 -= num;
      count++;
    } else {
      return count;
    }
  }
}

console.log(solution(queue1, queue2));
