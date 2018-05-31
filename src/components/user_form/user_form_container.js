import { connect } from 'react-redux';

import { updatePersonalData, updateResumeImageData,
         updateBenefitsData, updateSalaryData,
         updateLocationsData, updateTechsData } from '../../actions/user_actions';

import UserForm from './user_form';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateTechsData: data => dispatch(updateTechsData(data)),
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
