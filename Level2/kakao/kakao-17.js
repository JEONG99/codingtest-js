//2018 KAKAO BLIND RECRUITMENT

const msg = "ABABABABABABABAB";

function solution(msg) {
  const dictionary = new Map();
  let i = 1;
  for (const alphabet of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    dictionary.set(alphabet, i);
    i++;
  }

  let j = 0;
  const result = [];
  while (j < msg.length) {
    let k = 1;
    let w = msg.slice(j, j + k);
    let c = msg.slice(j + k, j + k + 1);
    let wc = w + c;
    while (dictionary.has(wc) && c) {
      k++;
      w = msg.slice(j, j + k);
      c = msg.slice(j + k, j + k + 1);
      wc = w + c;
    }
    if (!dictionary.has(wc)) {
      dictionary.set(wc, i);
      i++;
    }
    result.push(dictionary.get(w));
    j += k;
  }
  return result;
}

solution(msg);
