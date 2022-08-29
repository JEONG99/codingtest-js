//2022 KAKAO TECH INTERNSHIP - 두 큐 합 같게 만들기

//1 2 1 2 -> 1 2 1 2 1 1 10 -> 10
//1 1 10 2 ->  2 -> 2 1 2 1 2 1 1

const queue1 = [1, 2, 7, 2];
const queue2 = [4, 6, 5, 1];

function solution(queue1, queue2) {
  const queue = [...queue1, ...queue2];
  const targetSum = queue.reduce((a, v) => a + v) / 2;
  if (!Number.isInteger(targetSum)) return -1;
  let len = queue1.length;
  let count = 0;
  let start = 0;
  let end = len;
  let queue1Sum = queue.slice(start, end).reduce((a, v) => a + v);

  while (count <= (len - 1) * 3) {
    if (queue1Sum > targetSum) {
      queue1Sum -= queue[start];
      start++;
    } else if (queue1Sum < targetSum) {
      queue1Sum += queue[end];
      end++;
    } else if (queue1Sum === targetSum) {
      return count;
    }
    count++;
  }
  return -1;
}

console.log(solution(queue1, queue2));
