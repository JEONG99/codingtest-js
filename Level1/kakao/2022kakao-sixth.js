//2022 KAKAO BLIND RECRUITMENT - 신고 결과 받기

const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const id_list = ["muzi", "frodo", "apeach", "neo"];
const k = 2;

const result = new Array(id_list.length).fill(0);
const reportList = {};
for (const name of id_list) {
  reportList[name] = [];
}

for (const reportContent of [...new Set(report)]) {
  const [reporter, defendant] = reportContent.split(" ");
  reportList[defendant].push(reporter);
}

for (const key in reportList) {
  if (reportList[key].length >= k) {
    for (const name of reportList[key]) {
      result[id_list.indexOf(name)]++;
    }
  }
}

console.log(result);
