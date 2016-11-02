import { receiveAlbum,
         receiveAlbums,
         receiveAlbumErrors,
         FETCH_ALBUM,
         FETCH_ALBUMS,
         CREATE_ALBUM,
         UPDATE_ALBUM,
         DELETE_ALBUM
       } from '../actions/album_actions';

import { fetchAlbums, fetchAlbum, createAlbum,
         updateAlbum, deleteAlbum} from '../util/api_util';

import merge from 'lodash/merge'

const albumMiddleware = ({getState, dispatch}) => next => action => {
  let handleAlbum = (album) => dispatch(receiveAlbum(album));
  let handleAlbums = (albums) => dispatch(receiveAlbums(albums));
  let handleAlbumErrors = (errors) => dispatch(receiveAlbumErrors(errors.responseText));

  switch(action.type){
    case FETCH_ALBUMS:
      fetchAlbums(action.userId, handleAlbums, handleAlbumErrors)
      return next(action);
    case FETCH_ALBUM:
      fetchAlbum(action.albumId, handleAlbum, handleAlbumErrors)
      return next(action);
    case CREATE_ALBUM:
      createAlbum(action.album, handleAlbum, handleAlbumErrors)
      return next(action);
    case UPDATE_ALBUM:
      updateAlbum(action.album, handleAlbum, handleAlbumErrors)
      return next(action);
    case DELETE_ALBUM:
      deleteAlbum(action.albumId, handleAlbum, handleAlbumErrors)
      return next(action);
    default:
    return next(action);

  }

}

export default albumMiddleware
