import { connect } from 'react-redux';

import { updatePersonalData, updateResumeImageData } from '../../actions/user_actions';

import UserForm from './user_form';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updatePersonalData: data => dispatch(updatePersonalData(data)),
  updateResumeImageData: data => dispatch(updateResumeImageData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
