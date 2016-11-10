import {PLAY_TRACKS, PAUSE_TRACK} from "../actions/player_actions";
import merge from 'lodash/merge';

const _nullState = {
    tracks: [],
    track_files: []
}

const sessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case PLAY_TRACKS:
    let nowPlayingObject = {
      tracks: action.tracks,
      trackFiles: action.trackFiles
    }
      return merge({}, nowPlayingObject)
    case PAUSE_TRACK:
      return merge({}, state)
    default:
      return state;
  }
}

export default sessionReducer;
