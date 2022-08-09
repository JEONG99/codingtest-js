//2019 카카오 개발자 겨울 인턴십 - 튜플

const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";

function solution(s) {
  const result = new Set();
  const combination = s.slice(2, s.length - 2).split("},{");
  combination.sort((a, b) => a.length - b.length);
  combination.forEach((element) => {
    element.split(",").forEach((num) => {
      if (!result.has(num)) {
        result.add(num * 1);
      }
    });
  });
  console.log([...result]);
}

solution(s);
