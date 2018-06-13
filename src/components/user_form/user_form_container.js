import { connect } from 'react-redux';

import { updatePersonalData, updateResumeImageData,
         updateBenefitsData, updateSalaryData,
         updateLocationsData } from '../../actions/user_actions';
import { updateSkillData, createSkillData } from '../../actions/skill_actions';

import UserForm from './user_form';

const mapStateToProps = state => ({
  userData: state.userData,
  skillsData: state.skillsData,
  techData: state.technologiesData
});

const mapDispatchToProps = dispatch => ({
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
