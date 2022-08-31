//스택/큐 - 다리를 지나는 트럭

const truck_weights = [7, 4, 5, 6];

function solution(bridge_length, weight, truck_weights) {
  let time_count = 0;
  let bridge_weight = 0;
  const bridge = new Array(bridge_length).fill(0);
  while (truck_weights.length !== 0) {
    if (bridge_weight + truck_weights[0] - bridge[0] <= weight) {
      const current_truck = truck_weights.shift();
      const pass_truck = bridge.shift();
      bridge.push(current_truck);
      bridge_weight -= pass_truck;
      bridge_weight += current_truck;
    } else {
      bridge_weight -= bridge.shift();
      bridge.push(0);
    }
    time_count++;
  }
  while (bridge.length) {
    bridge.shift();
    time_count++;
  }
  return time_count;
}

solution(2, 10, truck_weights);
