import { SEARCH_QUERY, receiveSearchResults } from '../actions/search_actions';

import {search} from '../util/api_util';

import merge from 'lodash/merge'

const searchMiddleware = ({getState, dispatch}) => next => action => {
  let handleSuccess = (results) => dispatch(receiveSearchResults(results));
  let handleError = (errors) => dispatch(receiveUploadErrors(errors));
  switch(action.type){
    case SEARCH_QUERY:
      search(action.query, handleSuccess)
    default:
      return next(action);
  }

}

export default searchMiddleware
