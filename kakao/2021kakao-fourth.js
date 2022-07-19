//2021 KAKAO BLIND RECRUITMENT - 신규 아이디 추천

const id = "...!@BaT#*..y.abcdefghijklm";
const id2 = "z-+.^.";
const id3 = "=.=";
const id4 = "123_.def";
const id5 = "abcdefghijklmn.p";

//step1
let new_id = id5.toLowerCase();

//step2
new_id = new_id.replace(/[^a-z|0-9|\-|\_|\.]/g, "");

//step3&4
let new_id_array = new_id.split(".");
new_id_array = new_id_array.filter((word) => {
  return word !== "";
});
new_id = new_id_array.join(".");

//step5
new_id = new_id === "" ? "a" : new_id;

//step6
if (new_id.length >= 16) {
  new_id = new_id.substring(0, 15);
}

new_id =
  new_id[new_id.length - 1] === "."
    ? new_id.substring(0, 14)
    : new_id.substring(0, 15);

//step7
if (new_id.length <= 2) {
  new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
}

console.log(new_id);
