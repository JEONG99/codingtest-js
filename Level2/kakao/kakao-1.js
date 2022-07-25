//2019KAKAO BLIND RECQUITMENT - 오픈채팅방

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  const userList = {};
  const result = [];
  record.map((command) => {
    const [action, id, name] = command.split(" ");
    if (action === "Enter") {
      result.push([id, "님이 들어왔습니다."]);
      userList[id] = name;
    } else if (action === "Leave") {
      result.push([id, "님이 나갔습니다."]);
    } else {
      userList[id] = name;
    }
  });
  return result.map((command) => {
    return userList[command[0]] + command[1];
  });
}
console.log(solution(record));
