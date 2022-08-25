//Summer-Winter Coding(2019) - 멀쩡한 사각형

const w = 8;
const h = 12;

const gcd = (w, h) => {
  const mod = w % h;
  if (mod === 0) {
    return h;
  }
  return gcd(h, mod);
};

function solution(w, h) {
  return w * h - (w + h - gcd(w, h));
}
