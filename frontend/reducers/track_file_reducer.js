import merge from 'lodash/merge'
import { RECEIVE_UPLOAD,
    RECEIVE_UPLOAD_ERRORS } from '../actions/upload_actions'

const _defaultState = {
  url: {},

}

const trackFileReducer = (state= _defaultState, action) => {
  Object.freeze(state);

  switch(action.type){
    default:
      return state
  }
}

export default trackFileReducer;
