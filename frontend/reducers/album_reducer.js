import merge from 'lodash/merge'
import { RECEIVE_ALBUM, RECEIVE_ALBUMS,
    RECEIVE_ALBUM_ERRORS, RECEIVE_ARTIST, EDIT_ALBUM_MODE } from '../actions/album_actions'
const _defaultState = {
  artist: {},
  albums: {},
  errors: [],
  editMode: false
}

const albumReducer = (state= _defaultState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ALBUMS:
      return {albums: action.albums, errors: [], editMode: false}
    case RECEIVE_ALBUM:
      return {albums: action.album, errors: [], editMode: false}
    case RECEIVE_ALBUM_ERRORS:
      return merge({}, state, {errors: action.albumErrors})
    case RECEIVE_ARTIST:
      return merge({}, state, {artist: action.artist})
    case EDIT_ALBUM_MODE:
      return merge({}, state, {editMode: action.toggle})
    default:
      return state
  }
}

export default albumReducer;
