//Summer/Winter Coding(~2018) - 소수 만들기
const nums = [1, 2, 7, 6, 4];
let count = 0;

const isPrime = (num) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < nums.length - 2; i++) {
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      if (isPrime(nums[i] + nums[j] + nums[k])) {
        count++;
      }
    }
  }
}

console.log(count);
