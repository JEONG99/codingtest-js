//완전탐색 - 모음사전

function solution(word) {
  const count = [781, 156, 31, 6, 1];
  const alphabet = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  return word.split("").reduce((prevValue, currentWord, index) => {
    return prevValue + (count[index] * alphabet[currentWord] + 1);
  }, 0);
}
