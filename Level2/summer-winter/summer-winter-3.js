//Summer/Winter Coding(~2018) - 스킬트리

const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

function solution(skill, skill_trees) {
  return (result = skill_trees.filter((skillTree) => {
    let prevSkill = skill[0];
    let prevSkillIndex = skillTree.indexOf(prevSkill);
    for (let i = 1; i < skill.length; i++) {
      const currentSkill = skill[i];
      const currentSkillIndex = skillTree.indexOf(currentSkill);
      if (currentSkillIndex !== -1) {
        if (prevSkillIndex === -1 || prevSkillIndex > currentSkillIndex) {
          return false;
        }
      }
      prevSkillIndex = currentSkillIndex;
    }
    return true;
  }).length);
}

console.log(solution(skill, skill_trees));
