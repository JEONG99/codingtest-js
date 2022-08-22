const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  const restDays = progresses.map((progress, index) => {
    let day = 0;
    while (progress < 100) {
      progress += speeds[index];
      day++;
    }
    return day;
  });

  const result = [];
  let restDay;
  let count = 1;
  for (let i = 0; i < restDays.length; ) {
    let j = i + 1;
    restDay = restDays[i];
    while (restDays[j] && restDays[j] <= restDay) {
      j++;
      count++;
    }
    result.push(count);
    count = 1;
    i = j;
  }
  return result;
}

solution(progresses, speeds);
