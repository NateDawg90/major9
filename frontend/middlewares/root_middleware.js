import { applyMiddleware } from "redux";
import sessionMiddleware from './session_middleware';
import albumMiddleware from './album_middleware';
import trackMiddleware from './track_middleware';

const rootMiddleware = applyMiddleware(sessionMiddleware, albumMiddleware, trackMiddleware);

export default rootMiddleware;
