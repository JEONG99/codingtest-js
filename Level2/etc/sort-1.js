//정렬 - H index

const citations = [0, 1];

function solution(citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  let result = 0;
  while (i + 1 <= citations[i]) {
    result++;
    i++;
  }
  return result;
}

solution(citations);
