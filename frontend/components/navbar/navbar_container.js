import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout, login, receiveFormType } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  let guest = {user:{username:"Guest", password:"123456"}}
  return {
    logout: () => dispatch(logout()),
    receiveFormType: (formType) => dispatch(receiveFormType(formType)),
    guestLogin: () => dispatch(login(guest))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
