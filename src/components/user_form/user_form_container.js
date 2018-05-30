import { connect } from 'react-redux';

import { updatePersonalData} from '../../actions/user_actions';

import UserForm from './user_form';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updatePersonalData: data => dispatch(updatePersonalData(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
