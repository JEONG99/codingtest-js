const people = [70, 50, 80, 50, 40, 60];

function solution(people, limit) {
  people.sort((a, b) => b - a);
  let start = 0;
  let end = people.length - 1;
  let result = 0;
  while (start <= end) {
    if (people[start] + people[end] > limit) {
      start++;
    } else {
      start++;
      end--;
    }
    result++;
  }
  return result;
}

solution(people, 100);
