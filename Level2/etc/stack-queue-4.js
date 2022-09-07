//스택/큐 - 올바른 괄호

function solution(s) {
  let stack = 0;
  for (const el of s) {
    if (el === "(") {
      stack++;
    } else {
      if (stack < 1) {
        return false;
      } else {
        stack -= 1;
      }
    }
  }
  if (stack !== 0) {
    return false;
  }
  return true;
}

console.log(solution(")()("));
