//Summer/Winter Coding(~2018) - 배달

const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];

function solution(N, road, K) {
  const graph = Array.from(Array(N + 1), () => Array());
  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;
  const queue = [[1, 0]];

  for (const pass of road) {
    const [startCity, targetCity, cost] = pass;
    graph[startCity].push([targetCity, cost]);
    graph[targetCity].push([startCity, cost]);
  }

  while (queue.length) {
    const [currentCity] = queue.shift();

    for (const [nextCity, nextCost] of graph[currentCity]) {
      if (dist[nextCity] > dist[currentCity] + nextCost) {
        dist[nextCity] = dist[currentCity] + nextCost;
        queue.push([nextCity, nextCost]);
      }
    }
  }
  return dist.filter((v) => v <= K).length;
}

console.log(solution(5, road, 3));
