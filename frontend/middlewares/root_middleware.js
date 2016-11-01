import { applyMiddleware } from "redux";
import sessionMiddleware from './session_middleware';

const rootMiddleware = applyMiddleware(sessionMiddleware);

export default rootMiddleware;
