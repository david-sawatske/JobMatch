import { connect } from 'react-redux';

import { updateSkillData } from '../../actions/skill_actions';

import SkillIndex from './skill_index';

const mapStateToProps = state => ({
  userSkills: userSkills(state).skills,
  userId: state.userData.personalData.id
});

const mapDispatchToProps = dispatch => ({
  updateSkillData: data => dispatch(updateSkillData(data))
});

// Selector Start //
const userSkills = state => {
  const userId = state.userData.personalData.id;
  const skillsById = state.skillsData.skillsById;
  const techsById = state.technologiesData.techsById;

  const skills = {};
  let defaultSkillId;

  Object.keys(skillsById).map(skillId => {
    const skillObj = skillsById[skillId];

    if (userId === skillObj.userId) {
      const currTechId = skillObj.techId;
      const currTech = techsById[currTechId];

      skills[skillId] = { skillId: skillObj.skillId,
                          techName: currTech.label,
                          techId: skillObj.techId,
                          level: skillObj.level }

    } else if (!defaultSkillId) {
      defaultSkillId = skillId
    }
  })

  return { skills, defaultSkillId }
}
// Selector End //

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillIndex);
