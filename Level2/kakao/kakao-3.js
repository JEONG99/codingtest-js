//2018 KAKAO BLIND RECRUITMENT - [1차]뉴스 클러스터링

const str1 = "AAAA12";
const str2 = "aa1+aa2";

function solution(str1, str2) {
  const getCombinations = (strArray) => {
    const result = [];
    let currentIsAlpha = strArray[0].search(/[A-Z]/);
    for (let i = 0; i < strArray.length - 1; i++) {
      const nextIsAlpha = strArray[i + 1].search(/[A-Z]/);
      if (currentIsAlpha === 0 && nextIsAlpha === 0) {
        result.push(strArray[i] + strArray[i + 1]);
      }
      currentIsAlpha = nextIsAlpha;
    }
    return result;
  };

  const combiOne = getCombinations(str1.toUpperCase().split(""));
  let combiTwo = getCombinations(str2.toUpperCase().split(""));

  const intersection = combiOne.filter((value) => {
    if (combiTwo.includes(value)) {
      combiTwo.splice(combiTwo.indexOf(value), 1);
      return value;
    }
  });
  const union = combiOne.concat(combiTwo);

  if (union.length === 0) {
    return 65536;
  }
  return Math.floor((intersection.length / union.length) * 65536);
}

solution(str1, str2);
