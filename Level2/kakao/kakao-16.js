//2018 KAKAO BLIND RECRUITMENT - [3차] 방금그곡

const m = "ABCDE";
const musicinfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"];

function solution(m, musicinfos) {
  const melodyInfos = musicinfos.map((musicInfo) => {
    const [startTime, endTime, title, melody] = musicInfo.split(",");
    const hour = endTime.slice(0, 2) - startTime.slice(0, 2);
    const minute = endTime.slice(3) - startTime.slice(3);
    const playTime = 60 * hour + minute;
    const melodyArray = melody.match(/[A-Z]#?/g);

    let wholeMelody = melody.repeat(Math.floor(playTime / melodyArray.length));
    wholeMelody += melodyArray.slice(0, playTime % melodyArray.length).join("");
    return [title, playTime, wholeMelody];
  });

  const result = melodyInfos.filter(([title, playTime, wholeMelody]) => {
    let i = wholeMelody.indexOf(m);
    if (i === -1) return false;
    while (i !== -1) {
      if (wholeMelody[i + m.length] !== "#") return true;
      i = wholeMelody.indexOf(m, i + 1);
    }
    return false;
  });

  if (!result) {
    return "(None)";
  }
  result.sort((a, b) => {
    if (a[1] === b[1]) return 0;
    return b[1] - a[1];
  });
  return result[0][0];
}

console.log(solution(m, musicinfos));
