//2021카카오 채용연계 인턴십 - 숫자 문자열과 영단어

const numberEng = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
s = "one1twothree";
for (const num in numberEng) {
  s = s.replace(/num/g, numberEng[num].toString());
}
console.log(s);
