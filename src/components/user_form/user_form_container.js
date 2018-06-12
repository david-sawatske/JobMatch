import { connect } from 'react-redux';

import { updatePersonalData, updateResumeImageData,
         updateBenefitsData, updateSalaryData,
         updateLocationsData, updateTechsData } from '../../actions/user_actions';
import { updateSkillData, createSkillData } from '../../actions/skill_actions';

import UserForm from './user_form';

const mapStateToProps = state => ({
  userData: state.userData,
  skillData: state.skillData,
  techData: state.technologiesData
});

const mapDispatchToProps = dispatch => ({
  updateTechsData: data => dispatch(updateTechsData(data)),
  updateSkillData: data => dispatch(updateSkillData(data)),
  createSkillData: data => dispatch(createSkillData(data)),
  updateSalaryData: data => dispatch(updateSalaryData(data)),
  updatePersonalData: data => dispatch(updatePersonalData(data)),
  updateBenefitsData: data => dispatch(updateBenefitsData(data)),
  updateLocationsData: data => dispatch(updateLocationsData(data)),
  updateResumeImageData: data => dispatch(updateResumeImageData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
