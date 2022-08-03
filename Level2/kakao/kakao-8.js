const fees = [1, 461, 1, 10];
const records = ["00:00 1234 IN"];

function solution(fees, records) {
  let costOfCar = {};
  const [basicTime, basicCost, unitTime, unitCost] = fees;
  const splitRecords = records.map((record) => record.split(" "));
  splitRecords.forEach((record) => {
    const [time, carNum, history] = record;
    if (history === "IN") {
      if (!costOfCar[carNum]) {
        costOfCar[carNum] = {
          admissionTime: time.split(":"),
          totalTime: 0,
          totalCost: 0,
        };
      } else {
        costOfCar[carNum].admissionTime = time.split(":");
      }
    } else {
      const checkOutTime = time.split(":");
      costOfCar[carNum].totalTime +=
        (parseInt(checkOutTime[0]) -
          parseInt(costOfCar[carNum].admissionTime[0])) *
          60 +
        (parseInt(checkOutTime[1]) -
          parseInt(costOfCar[carNum].admissionTime[1]));
      costOfCar[carNum].admissionTime = null;
    }
  });
  for (carNum in costOfCar) {
    if (costOfCar[carNum].admissionTime) {
      costOfCar[carNum].totalTime +=
        (23 - parseInt(costOfCar[carNum].admissionTime[0])) * 60 +
        (59 - parseInt(costOfCar[carNum].admissionTime[1]));
      costOfCar[carNum].admissionTime = null;
    }
  }
  for (carNum in costOfCar) {
    if (costOfCar[carNum].totalTime <= basicTime) {
      costOfCar[carNum].totalCost = basicCost;
    } else {
      const cost =
        basicCost +
        Math.ceil((costOfCar[carNum].totalTime - basicTime) / unitTime) *
          unitCost;
      costOfCar[carNum].totalCost = cost;
    }
  }
  const result = Object.keys(costOfCar)
    .sort()
    .map((carNum) => costOfCar[carNum].totalCost);
  return result;
}
