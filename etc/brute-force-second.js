//완전팀색 - 최소직사각형

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
  [20, 90],
];

function solution(sizes) {
  const sortSizes = sizes.map((size) => {
    return size.sort((a, b) => a - b);
  });
  const h = Math.max(...sortSizes.map((size) => size[0]));
  const w = Math.max(...sortSizes.map((size) => size[1]));
  return h * w;
}
