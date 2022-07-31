//2020 KAKAO BLIND RECRUITMENT - 괄호 변환

const p = "()))((()";

const isRightString = (p) => {
  let stack = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return true;
};

const balanceToRight = (p) => {
  if (p === "") {
    return "";
  }
  let u;
  let v;
  let count = 0;
  const arrayP = p.split("");
  arrayP[0] === "(" ? count++ : count--;
  for (let i = 1; i < arrayP.length; i++) {
    arrayP[i] === "(" ? count++ : count--;
    if (count === 0) {
      u = arrayP.slice(0, i + 1).join("");
      v = arrayP.slice(i + 1).join("");
      break;
    }
  }
  if (isRightString(u.split(""))) {
    return u + balanceToRight(v);
  } else {
    let result = "(" + balanceToRight(v) + ")";
    u.split("")
      .slice(1, -1)
      .forEach((element) => {
        element === "(" ? (result += ")") : (result += "(");
      });
    return result;
  }
};

function solution(p) {
  return balanceToRight(p);
}

console.log(solution(p));
