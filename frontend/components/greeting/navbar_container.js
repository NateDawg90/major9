import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout, login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  let guest = {user:{username:"Guest", password:"123456"}};
  return {
    guestLogin: () => dispatch(login(guest)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
