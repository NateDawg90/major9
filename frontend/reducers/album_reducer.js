import merge from 'lodash/merge'
import { RECEIVE_ALBUM, RECEIVE_ALBUMS,
    RECEIVE_ALBUM_ERRORS } from '../actions/album_actions'

const _defaultState = {
  albums: {},
  errors: []
}

const albumReducer = (state= _defaultState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ALBUMS:
      return {albums: action.albums, errors: []}
    case RECEIVE_ALBUM:
      return {albums: action.album, errors: []}
    case RECEIVE_ALBUM_ERRORS:
      return merge({}, state, {errors: action.albumErrors})
    default:
      return state
  }
}

export default albumReducer;
