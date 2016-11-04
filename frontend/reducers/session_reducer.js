import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT, RECEIVE_FORMTYPE} from "../actions/session_actions";
import merge from 'lodash/merge';

const _nullState = {
    currentUser: null,
    errors: [],
    formType: ""
}

const sessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
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
    case RECEIVE_FORMTYPE:
      let formType = {formType: action.formType}
      return merge({}, state, formType)
    default:
      return state;
  }
}

export default sessionReducer;
