import { receiveAlbum,
         receiveAlbums,
         receiveAlbumErrors,
         receiveArtist,
         FETCH_ARTIST,
         FETCH_ALBUM,
         FETCH_ALBUMS,
         CREATE_ALBUM,
         UPDATE_ALBUM,
         DELETE_ALBUM
       } from '../actions/album_actions';

import { fetchAlbums, fetchAlbum, createAlbum,
         updateAlbum, deleteAlbum, fetchArtist} from '../util/api_util';
import {hashHistory} from 'react-router';
import merge from 'lodash/merge'

const albumMiddleware = ({getState, dispatch}) => next => action => {
  let redirectToFeaturedAlbum = () => {
    let firstAlbumId = Object.keys(getState().albums.albums)[0]
    let firstAlbum = getState().albums.albums[firstAlbumId]
    hashHistory.replace(`/artist/${firstAlbum.artist.id}/album/${firstAlbumId}`)
  }
  let handleAlbum = (album) => dispatch(receiveAlbum(album));
  let handleAlbums = (albums) => {
    dispatch(receiveAlbums(albums))
    redirectToFeaturedAlbum();
  };
  let handleAlbumErrors = (errors) => dispatch(receiveAlbumErrors(errors.responseJSON));
  let handleArtist = (artist) => dispatch(receiveArtist(artist))

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
    case FETCH_ARTIST:
      fetchArtist(action.artistId, handleArtist, handleAlbumErrors)
      return next(action);
    default:
    return next(action);

  }

}

export default albumMiddleware
