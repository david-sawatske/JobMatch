import { connect } from 'react-redux';

import { updatePersonalData, updateResumeImageData,
         updateLocationsData, updateTechsData } from '../../actions/user_actions';

import UserForm from './user_form';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateTechsData: data => dispatch(updateTechsData(data)),
  updatePersonalData: data => dispatch(updatePersonalData(data)),
  updateLocationsData: data => dispatch(updateLocationsData(data)),
  updateResumeImageData: data => dispatch(updateResumeImageData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
