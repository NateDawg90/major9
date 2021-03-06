import { receiveAlbum,
         receiveAlbums,
         receiveAlbumErrors,
         receiveArtist,
         receiveArtists,
         editAlbumMode,
         deleteAlbumFromStore,
         FETCH_ARTIST,
         FETCH_ARTISTS,
         FETCH_ALBUM,
         FETCH_ALBUMS,
         CREATE_ALBUM,
         UPDATE_ALBUM,
         DELETE_ALBUM,
         DELETE_ALBUM_FROM_STORE
       } from '../actions/album_actions';

import { fetchAlbums, fetchAlbum, createAlbum,
         updateAlbum, deleteAlbum, fetchArtist, fetchArtists} from '../util/api_util';
import {hashHistory} from 'react-router';
import merge from 'lodash/merge'

const albumMiddleware = ({getState, dispatch}) => next => action => {
  let redirectToFeaturedAlbum = () => {
    let firstAlbumId = Object.keys(getState().albums.albums).reverse()[0]
    let firstAlbum = getState().albums.albums[firstAlbumId]
    hashHistory.replace(`/artist/${firstAlbum.artist.id}/album/${firstAlbumId}`)
  }

  let handleUpdateAlbum = (album) => {
    dispatch(receiveAlbum(album))
    hashHistory.replace(`/artist/${album.artist_id}/album/${album.id}`)
  };

  let handleCreateAlbum = (album) => {
    dispatch(receiveAlbum(album))
    dispatch(editAlbumMode(true))
  }

  let handleAlbums = (albums) => {
    dispatch(receiveAlbums(albums))
    redirectToFeaturedAlbum();
  };

  let handleAlbumsNoRedirect = (albums) => {
    dispatch(receiveAlbums(albums))
  };

  let handleDelete = (album) => {
    dispatch(deleteAlbumFromStore(album))
    redirectToFeaturedAlbum();
  }
  let handleAlbumErrors = (errors) => dispatch(receiveAlbumErrors(errors.responseJSON));
  let handleArtist = (artist) => dispatch(receiveArtist(artist))
  let handleArtists = (artists) => {
    dispatch(receiveArtists(artists))
    hashHistory.replace(`/`)
  }
  switch(action.type){
    case FETCH_ALBUMS:
      if (action.redirect === true) {
      fetchAlbums(action.userId, handleAlbums, handleAlbumErrors)
    } else {
      fetchAlbums(action.userId, handleAlbumsNoRedirect, handleAlbumErrors)
    }
      return next(action);
    case FETCH_ALBUM:
      fetchAlbum(action.albumId, handleAlbum, handleAlbumErrors)
      return next(action);
    case CREATE_ALBUM:
      createAlbum(action.album, handleCreateAlbum, handleAlbumErrors)
      return next(action);
    case UPDATE_ALBUM:
      updateAlbum(action.album, handleUpdateAlbum, handleAlbumErrors)
      return next(action);
    case DELETE_ALBUM:
      deleteAlbum(action.albumId, handleDelete, handleAlbumErrors)
      return next(action);
    case FETCH_ARTIST:
      fetchArtist(action.artistId, handleArtist, handleAlbumErrors)
      return next(action);
    case FETCH_ARTISTS:
      fetchArtists(handleArtists, handleAlbumErrors)
      return next(action);
    default:
    return next(action);

  }

}

export default albumMiddleware
