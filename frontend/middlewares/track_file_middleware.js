import { UPLOAD_TRACK, receiveUpload, receiveUploadErrors
} from '../actions/upload_actions';

import {receiveAlbum, receiveAlbumErrors} from '../actions/album_actions'

import {uploadTrack} from '../util/api_util';

import merge from 'lodash/merge'

const trackMiddleware = ({getState, dispatch}) => next => action => {
  let handleSuccess = (album) => dispatch(receiveAlbum(album));
  let handleError = (errors) => dispatch(receiveAlbumErrors(errors));

  switch(action.type){
    case UPLOAD_TRACK:
      uploadTrack(action.track, handleSuccess, handleError )
    default:
      return next(action);
  }

}

export default trackMiddleware
