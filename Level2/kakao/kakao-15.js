//2018 KAKAO BLIND RECRUITMENT - [1차]캐시

const cacheSize = 3;
const cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "SanFrancisco",
  "Seoul",
  "Rome",
  "Paris",
  "Jeju",
  "NewYork",
  "Rome",
];

function solution(cacheSize, cities) {
  const cache = [];
  let time = 0;
  for (const city of cities.map((city) => city.toUpperCase())) {
    const index = cache.findIndex((el) => el === city);
    if (index === -1) {
      cache.push(city);
      if (cache.length > cacheSize) {
        cache.shift();
      }
      time += 5;
    } else {
      cache.splice(index, 1);
      cache.push(city);
      time += 1;
    }
  }
  return time;
}

console.log(solution(cacheSize, cities));
