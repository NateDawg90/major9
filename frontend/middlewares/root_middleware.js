import { applyMiddleware } from "redux";
import sessionMiddleware from './session_middleware';
import albumMiddleware from './album_middleware';
import trackMiddleware from './track_middleware';
import trackFileMiddleware from './track_file_middleware';
const rootMiddleware = applyMiddleware(sessionMiddleware, albumMiddleware, trackMiddleware, trackFileMiddleware);

export default rootMiddleware;
