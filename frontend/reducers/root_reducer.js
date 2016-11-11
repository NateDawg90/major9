import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import albumReducer from './album_reducer';
import trackReducer from './track_reducer';
import trackFileReducer from './track_file_reducer';
import playerReducer from './player_reducer';
import searchReducer from './search_reducer'
const rootReducer = combineReducers({
  session: sessionReducer,
  albums: albumReducer,
  tracks: trackReducer,
  track_file: trackFileReducer,
  now_playing: playerReducer,
  suggestions: searchReducer
});

export default rootReducer;
