import { combineReducers } from "redux";
import { popularReducer } from "./popular/popular.reducer";
import { battleReducer } from "./battle/battle.reducer";

export default combineReducers({
  popularReducer,
  battleReducer,
});
