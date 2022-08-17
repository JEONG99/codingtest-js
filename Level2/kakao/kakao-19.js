//2022 KAKAO BLIND RECRUITMENT - k진수에서 소수 개수 구하기

const n = 110011;
const k = 10;

const isPrime = (num) => {
  if (!num) return false;
  if (num === "1") {
    return false;
  }
  if (num === "2") {
    return true;
  }
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(n, k) {
  const kNumber = n.toString(k).split("0");
  return kNumber.reduce((prev, num) => {
    if (isPrime(num)) {
      prev++;
    }
    return prev;
  }, 0);
}

console.log(solution(n, k));
