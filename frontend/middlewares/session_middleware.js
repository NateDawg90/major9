import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/api_util';
import merge from 'lodash/merge'

const sessionMiddleware = ({getState, dispatch}) => next => action => {
  const handleSuccess = (data) => dispatch(receiveCurrentUser(data));
  const handleError = (data) => dispatch(receiveErrors(data.responseJSON));
  const handleLogout = () => next(action);
  switch(action.type){
  case LOGIN:
    login(action.user, handleSuccess, handleError)
    break;
  case LOGOUT:
    logout(handleLogout, handleError)
    break;
  case SIGNUP:
    signup(action.user, handleSuccess, handleError)
    break;
  }

  return next(action);
}

export default sessionMiddleware;
