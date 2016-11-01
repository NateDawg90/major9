import { connect } from "react-redux";
import sessionForm from './session_form';
import {signup, login} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  loggedIn: (state.session.currentUser !== null ? true : false ),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  formType: location.hash,

  processForm: (formType, user) => {
    // debugger;

    let userObject = { user : user};
    if (formType === '#/signup') {
      dispatch(signup(userObject));
    } else if (formType === '#/login') {
      dispatch(login(userObject));
    }
  }

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sessionForm);
