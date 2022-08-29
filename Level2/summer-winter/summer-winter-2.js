//Summer-Winter Coding(~2018) - 영어 끝말잇기

const words = ["hello", "one", "even", "never", "now", "world", "draw"];

function solution(n, words) {
  const set = new Set();
  let prevWord = words[0];
  set.add(prevWord);
  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    if (prevWord.slice(prevWord.length - 1) !== currentWord[0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    if (set.has(currentWord)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    prevWord = words[i];
    set.add(currentWord);
  }
  return [0, 0];
}

console.log(solution(2, words));
