import merge from 'lodash/merge'
import { RECEIVE_ALBUM, RECEIVE_ALBUMS,
    RECEIVE_ALBUM_ERRORS, RECEIVE_ARTIST, EDIT_ALBUM_MODE,
     DELETE_ALBUM_FROM_STORE, RECEIVE_ARTISTS } from '../actions/album_actions'
const _defaultState = {
  artists: {},
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
      return merge({}, state, {albums:{[action.album.id]: action.album}})
    case RECEIVE_ALBUM_ERRORS:
      return merge({}, state, {errors: action.albumErrors})
    case RECEIVE_ARTIST:
      return merge({}, state, {artists: action.artist})
    case RECEIVE_ARTISTS:
      return merge({}, state, {artists: action.artists})
    case DELETE_ALBUM_FROM_STORE:
      let newState = merge({}, state)
      delete newState['albums'][action.album.id]
      return merge({}, newState)
    case EDIT_ALBUM_MODE:
      return merge({}, state, {editMode: action.toggle})
    default:
      return state
  }
}

export default albumReducer;
