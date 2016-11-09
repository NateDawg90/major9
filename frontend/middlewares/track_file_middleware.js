import { UPLOAD_TRACK, receiveUpload, receiveUploadErrors
} from '../actions/upload_actions';

import {uploadTrack} from '../util/api_util';

import merge from 'lodash/merge'

const trackMiddleware = ({getState, dispatch}) => next => action => {
  let handleSuccess = (upload) => dispatch(receiveUpload(upload));
  let handleError = (errors) => dispatch(receiveUploadErrors(errors));

  switch(action.type){
    case UPLOAD_TRACK:
      uploadTrack(action.track, handleSuccess, handleError )
    default:
      return next(action);
  }

}

export default trackMiddleware
