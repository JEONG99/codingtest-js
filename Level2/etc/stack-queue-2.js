//스택/큐 - 프린터

const priorities = [2, 1, 3, 2];
const location = 2;

function solution(priorities, location) {
  const documents = priorities.map((priority, index) => ({
    priority,
    location: index,
  }));

  const result = [];
  while (documents.length !== 0) {
    const document = documents.shift();
    if (documents.find((el) => el.priority > document.priority)) {
      documents.push(document);
    } else {
      result.push(document);
    }
  }
  return result.findIndex((document) => document.location === location) + 1;
}

solution(priorities, location);
