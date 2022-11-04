function solution(n, k) {
  const factorial = (n) => {
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  const result = [];
  let people = Array.from(new Array(n), (v, i) => i + 1);

  let remain = k - 1;
  for (let i = n - 1; i > 0; i--) {
    const factorialNum = factorial(i);
    const quotient = Math.floor(remain / factorialNum);
    remain = remain % factorialNum;

    result.push(people[quotient]);
    people.splice(quotient, 1);
  }
  result.push(people[0]);
  return result;
}
