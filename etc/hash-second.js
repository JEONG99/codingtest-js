//해시 - 폰켓몬

const nums = [3, 3, 3, 2, 2, 2];

function solution(nums) {
  const category = Array.from(new Set(nums));
  return nums.length / 2 >= category.length ? category.length : nums.length / 2;
}

console.log(solution(nums));
