import merge from 'lodash/merge'
import { RECEIVE_TRACKS, RECEIVE_TRACK,
    RECEIVE_TRACK_ERRORS, DELETE_TRACK_FROM_STORE } from '../actions/track_actions'

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
      return merge({}, state, {tracks: {[action.track.id]: action.track}, errors: []})
    case RECEIVE_TRACK_ERRORS:
      if (action.trackErrors[0] === ""){
        newState = {tracks:state.tracks, errors: []}
        return newState
      }
      return merge({}, state, {errors: action.trackErrors})
    case DELETE_TRACK_FROM_STORE:
      let newState = merge({}, state)
      delete newState['tracks'][action.track.id]
      return merge({}, newState)
    default:
      return state
  }
}

export default trackReducer;
