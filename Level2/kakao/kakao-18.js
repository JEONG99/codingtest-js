//2018 KAKAO BLIND RECRUITMENT

const files = [
  "F-012 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-11 Tomcat",
];

function solution(files) {
  const filesSplitArray = files.map((file) => {
    const HEAD = file.match(/[a-zA-Z| |.|-]+/)[0];
    const NUMBER = file.match(/\d+/)[0];
    const TAIL = file.replace(HEAD, "").replace(NUMBER, "");
    return [HEAD, NUMBER, TAIL];
  });
  filesSplitArray.sort((a, b) => a[1] * 1 - b[1] * 1);
  filesSplitArray.sort((a, b) => {
    const upperCaseA = a[0].toUpperCase();
    const upperCaseB = b[0].toUpperCase();

    if (upperCaseA < upperCaseB) return -1;
    if (upperCaseA > upperCaseB) return 1;
    else return 0;
  });
  return filesSplitArray.map((file) => file.join(""));
}

console.log(solution(files));
