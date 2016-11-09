import merge from 'lodash/merge'
import { RECEIVE_UPLOAD,
    RECEIVE_UPLOAD_ERRORS } from '../actions/upload_actions'

const _defaultState = {
  tracks: {},
  errors: []
}

const trackReducer = (state= _defaultState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_TRACKS:
      return {tracks: action.tracks, errors: []}
    case RECEIVE_TRACK:
      return {tracks: action.track, errors: []}
    case RECEIVE_TRACK_ERRORS:
      return merge({}, state, {errors: action.trackErrors})
    default:
      return state
  }
}

export default trackReducer;
