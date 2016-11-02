import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { fetchAlbums, fetchAlbum, createAlbum,
         updateAlbum, deleteAlbum} from '../util/api_util';
         
import merge from 'lodash/merge'

const albumMiddleware = ({getState, dispatch}) => next => action => {

}

export const albumMiddleware
