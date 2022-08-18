//연습문제 - 124 나라의 숫자
/*
1 1
2 2
3 4
4 11
5 12
6 14
7 21
8 22
9 24
10 41
11 42
12 44
13 111
14 112
15 114
16 121
17 122
18 124
19 141
20 142
21 144
22 211
23 212
24 214
25 221
26 222
27 224
28 241
*/

const n = 15;

function solution(n) {
  const bit = ["4", "1", "2"];
  let result = "";

  while (n) {
    result = bit[n % 3] + result;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }
  return result;
}

console.log(solution(n));
