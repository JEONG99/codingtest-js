//2021 KAKAO BLIND RECRUITMENT - 순위 검색

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

const binarySearch = (scores, score) => {
  let start = 0;
  let end = scores.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (scores[mid] >= score) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return scores.length - start;
};

function solution(info, query) {
  //총 경우의 수 (108가지)
  const infoCases = {};
  ["cpp", "java", "python", "-"].forEach((lang) => {
    ["backend", "frontend", "-"].forEach((pos) => {
      ["junior", "senior", "-"].forEach((level) => {
        ["chicken", "pizza", "-"].forEach((food) => {
          infoCases[lang + pos + level + food] = [];
        });
      });
    });
  });
  info.forEach((value) => {
    value = value.split(" ");
    [value[0], "-"].forEach((lang) => {
      [value[1], "-"].forEach((pos) => {
        [value[2], "-"].forEach((level) => {
          [value[3], "-"].forEach((food) => {
            infoCases[lang + pos + level + food].push(parseInt(value[4]));
          });
        });
      });
    });
  });
  for (const [key, value] of Object.entries(infoCases)) {
    infoCases[key] = value.sort((a, b) => a - b);
  }
  return query.map((condition) => {
    condition = condition.replace(/ and /g, "").split(" ");
    const score = parseInt(condition[1]);
    condition = condition[0];
    const scores = infoCases[condition];
    if (scores) {
      return binarySearch(scores, score);
    }
    return 0;
  });
}

console.log(solution(info, query));
