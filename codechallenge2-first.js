//월간 코드 챌린지 시즌2 - 음양 더하기

const absolutes = [4, 7, 12];
const signs = [true, false, true];
let result = 0;

for (let i = 0; i < absolutes.length; i++) {
  if (signs[i]) {
    result += absolutes[i];
  } else {
    result -= absolutes[i];
  }
}
console.log(result);
