//월간 코드 챌린지 시즌2 - 2개 이하로 다른 비트

function solution(numbers) {
  return numbers.map((number) => {
    if (number % 2) {
      let bits = number.toString(2);
      let index = -1;
      for (let i = 0; i < bits.length; i++) {
        if (bits[i] === "0") {
          index = i;
        }
      }
      if (index === -1) {
        bits = bits.slice(1);
        bits = "10" + bits;
        return parseInt(bits, 2);
      } else {
        const bitsArray = bits.split("");
        bitsArray.splice(index, 2, "10");
        return parseInt(bitsArray.join(""), 2);
      }
    } else {
      return number + 1;
    }
  });
}
