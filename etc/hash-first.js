//해시 - 완주하지 못한 선수

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

function solutuon(participant, completion) {
  const hash = new Map();
  participant.map((person) => {
    if (!hash.get(person)) {
      hash.set(person, 1);
    } else {
      hash.set(person, hash.get(person) + 1);
    }
  });
  completion.map((person) => {
    hash.set(person, hash.get(person) - 1);
  });
  for (person of participant) {
    if (hash.get(person) >= 1) {
      return person;
    }
  }
}

console.log(solutuon(participant, completion));
