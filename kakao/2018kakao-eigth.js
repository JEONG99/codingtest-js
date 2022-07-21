//2018 KAKAO BLIND RECRUITMENT - [1차]다트 게임

const dartResult1 = "1S2D*3T";
const dartResult2 = "1D2S#10S";
const dartResult3 = "1S*2T*3S";
const dartResult4 = "1D#2S*3S";

const matchArray = dartResult3.match(/\d{1,2}[SDT][*#]?/g);
const scores = [];
matchArray.map((value, index) => {
  let score = parseInt(value.match(/\d{1,2}/g));
  const bonus = value.match(/[SDT]/g);
  const option = value.match(/[*#]/g);

  if (bonus == "D") {
    score = Math.pow(score, 2);
  } else if (bonus == "T") {
    score = Math.pow(score, 3);
  }

  if (option == "*") {
    score *= 2;
    if (index != 0) {
      scores[index - 1] *= 2;
    }
  } else if (option == "#") {
    score *= -1;
  }
  scores.push(score);
});

console.log(scores.reduce((result, cur) => (result += cur), 0));
