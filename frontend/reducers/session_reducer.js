import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT} from "../actions/session_actions";
import merge from 'lodash/merge';

const _nullState = {
    currentUser: null,
    errors: []
}

const sessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case LOGOUT:
      return merge({},_nullState)
      break;
    case RECEIVE_CURRENT_USER:
      let newState = {
          currentUser: action.user,
          errors: []
      }
      return newState
    case RECEIVE_ERRORS:
      let errors = {errors: action.errors}
      return merge({}, state, errors)
    break;
    default:
      return state;
  }
}

export default sessionReducer;
