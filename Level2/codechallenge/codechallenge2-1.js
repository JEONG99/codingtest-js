//월간 코드 챌린지 시즌2 - 괄호 회전하기

const s = "[](){}";

const checkString = (s) => {
  const stack = [];
  for (const alpha of s) {
    if (alpha === "[" || alpha === "(" || alpha === "{") {
      stack.push(alpha);
    } else {
      const el = stack.pop();
      if (alpha === "]") {
        if (el !== "[") {
          return false;
        }
      } else if (alpha === ")") {
        if (el !== "(") {
          return false;
        }
      } else if (alpha === "}") {
        if (el !== "{") {
          return false;
        }
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

function solution(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (checkString(s)) {
      result++;
    }
    s += s[0];
    s = s.slice(1);
  }
  return result;
}

console.log(solution(s));
