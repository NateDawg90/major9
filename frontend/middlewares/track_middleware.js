import { receiveTrack,
         receiveTracks,
         receiveTrackErrors,
         FETCH_TRACK,
         FETCH_TRACKS,
         CREATE_TRACK,
         UPDATE_TRACK,
         DELETE_TRACK
       } from '../actions/track_actions';

import { fetchTracks, fetchTrack, createTrack,
         updateTrack, deleteTrack} from '../util/api_util';
import { editAlbumMode} from '../actions/album_actions';

import {hashHistory} from 'react-router';
import merge from 'lodash/merge'

const trackMiddleware = ({getState, dispatch}) => next => action => {
  let redirectToRequestedTrack = () => {
    let requestedTrackId = Object.keys(getState().tracks.tracks)[0]
    let requestedTrack = getState().tracks.tracks[requestedTrackId]
    hashHistory.replace(`/artist/${requestedTrack.artist_id}/album/${requestedTrack.album_id}/track/${requestedTrack.id}`)
  }
  let handleTrack = (Track) => {
    dispatch(receiveTrack(Track));
    redirectToRequestedTrack();
  }

  let handleTrackNoRedirect = (Track) => {
    dispatch(receiveTrack(Track));
    dispatch(editAlbumMode(true));
  }
  let handleTracks = (tracks) => dispatch(receiveTracks(tracks));
  let handleTrackErrors = (errors) => dispatch(receiveTrackErrors(errors.responseText));
  switch(action.type){
    case FETCH_TRACKS:
      fetchTracks(action.albumId, handleTracks, handleTrackErrors)
      return next(action);
    case FETCH_TRACK:
      fetchTrack(action.albumId, action.trackId,
        handleTrack, handleTrackErrors)
      return next(action);
    case CREATE_TRACK:
      createTrack(action.albumId, action.track,
        handleTracks, handleTrackErrors)
      return next(action);
    case UPDATE_TRACK:
      updateTrack(action.albumId, action.track,
        handleTrack, handleTrackErrors)
      return next(action);
    case DELETE_TRACK:
      deleteTrack(action.albumId, action.trackNum,
        handleTracks, handleTrackErrors)
      return next(action);
    default:
      return next(action);
  }
}

export default trackMiddleware
