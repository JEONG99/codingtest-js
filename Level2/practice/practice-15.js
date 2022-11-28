//연습문제 - 귤 고르기

function solution(k, tangerine) {
  let result = 0;
  let count = 0;
  const map = new Map();
  for (const tan of tangerine) {
    if (map.has(tan)) {
      map.set(tan, map.get(tan) + 1);
    } else {
      map.set(tan, 1);
    }
  }
  const arr = [...map];
  arr.sort((a, b) => b[1] - a[1]);
  for (const tangerine of arr) {
    result++;
    count += tangerine[1];
    if (count >= k) {
      break;
    }
  }
  return result;
}
