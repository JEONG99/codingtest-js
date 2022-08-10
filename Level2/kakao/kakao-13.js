//2020 KAKAO BLIND RECRUITMENT - 문자열 압축

const s = "abcabcabcabcdededededede";

function solution(s) {
  const result = [];
  for (let i = 1; i <= Math.ceil(s.length / 2); i++) {
    let origin = s.substr(0, i);
    let count = 1;
    let compress = "";
    for (let j = i; j < s.length + 1; j += i) {
      const target = s.substr(j, i);
      if (origin === target) count++;
      else {
        count > 1 ? (compress += String(count) + origin) : (compress += origin);
        count = 1;
        origin = s.substr(j, i);
      }
    }
    count > 1 ? (compress += String(count) + origin) : (compress += origin);
    result.push(compress.length);
  }
  return Math.min(...result);
}

solution(s);
