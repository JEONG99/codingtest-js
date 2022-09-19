//2017 팁스타운 - 짝지어 제거하기

function solution(s) {
  const stack = [];
  for (const alphabet of s) {
    if (stack[stack.length - 1] === alphabet) {
      stack.pop();
    } else {
      stack.push(alphabet);
    }
  }
  if (stack.length) {
    return 0;
  }
  return 1;
}

solution("baabaa");
