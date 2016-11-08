import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout, login, receiveFormType, receiveErrors } from '../../actions/session_actions';
import {fetchArtists} from '../../actions/album_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    artists: state.albums.artists
  };
};

const mapDispatchToProps = (dispatch) => {
  let guest = {user:{username:"Guest", password:"123456"}}
  return {
    logout: () => dispatch(logout()),
    receiveFormType: (formType) => dispatch(receiveFormType(formType)),
    guestLogin: () => dispatch(login(guest)),
    clearErrors: (blank) => {dispatch(receiveErrors(blank))},
    fetchArtists: () => dispatch(fetchArtists())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
