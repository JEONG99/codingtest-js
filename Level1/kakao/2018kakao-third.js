//2018 KAKAO BLIND RECRUITMENT - [1차] 비밀지도

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

let arr1Bit = Array.from(Array(n), () => new Array(n));
let arr2Bit = Array.from(Array(n), () => new Array(n));
let codeBit = Array.from(Array(n), () => new Array(n).fill(" "));
let singleBit = new Array(5);

for (let i = 0; i < n; i++) {
  singleBit = singleBit.fill(0);
  let value = arr1[i];
  let j = n - 1;
  while (value !== 0) {
    singleBit[j] = value % 2;
    value = parseInt(value / 2);
    j--;
  }
  for (let k = 0; k < n; k++) {
    arr1Bit[i][k] = singleBit[k];
  }
}

for (let i = 0; i < n; i++) {
  singleBit = singleBit.fill(0);
  let value = arr2[i];
  let j = n - 1;
  while (value !== 0) {
    singleBit[j] = value % 2;
    value = parseInt(value / 2);
    j--;
  }
  for (let k = 0; k < n; k++) {
    arr2Bit[i][k] = singleBit[k];
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr1Bit[i][j] === 1 || arr2Bit[i][j] === 1) {
      codeBit[i][j] = "#";
    }
  }
  codeBit[i] = codeBit[i].join("");
}
