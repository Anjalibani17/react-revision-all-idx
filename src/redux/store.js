import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/counter";

export default createStore(rootReducer, applyMiddleware(logger));
