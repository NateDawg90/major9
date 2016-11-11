import merge from 'lodash/merge'
import { RECEIVE_SEARCH_RESULTS} from '../actions/search_actions';

const _defaultState = {
  suggestions: {},
}

const trackFileReducer = (state= _defaultState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
      return {suggestions: action.suggestions}
    default:
      return state
  }
}

export default trackFileReducer;
