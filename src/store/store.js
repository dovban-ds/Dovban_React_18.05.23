import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root.reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
