import { connect } from 'react-redux';

import { updateSkillData } from '../../actions/skill_actions';

import SkillIndex from './skill_index';

const mapStateToProps = state => ({
  userSkills: userSkills(state),
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

  const userSkillsById = {};
  const userSkillIds = [];

  Object.keys(skillsById).map(skillId => {
    const skillObj = skillsById[skillId];

    if (userId === skillObj.userId) {
      const currTechId = skillObj.techId;
      const currTech = techsById[currTechId];

      userSkillIds.push(skillId);
      userSkillsById[skillId] = { skillId: skillObj.skillId,
                          techName: currTech.label,
                          techId: skillObj.techId,
                          level: skillObj.level };

    }
  })

  return { userSkillsById, userSkillIds }
}
// Selector End //

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillIndex);
