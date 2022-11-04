//완전탐색 - 전력망을 둘로 나누기

const n = 9;
const wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

function solution(n, wires) {
  const graph = {};
  let result = n;
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (const wire of wires) {
    graph[wire[0]].push(wire[1]);
    graph[wire[1]].push(wire[0]);
  }

  for (const wire of wires) {
    let nodes = { leftNodes: 0, rightNodes: 0 };
    const getNodes = (currentNode, exceptNode, arrow) => {
      for (const node of graph[currentNode]) {
        if (node !== exceptNode) {
          nodes[arrow] += 1;
          getNodes(node, currentNode, arrow);
        }
      }
    };
    getNodes(wire[0], wire[1], "leftNodes");
    getNodes(wire[1], wire[0], "rightNodes");
    result = Math.min(result, Math.abs(nodes.leftNodes - nodes.rightNodes));
  }
  return result;
}
