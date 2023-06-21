import { createLogger } from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import popularReducer from "./popular/popular.slice";
import battleReducer from "./battle/battle.slice";

export const store = configureStore({
  reducer: {
    popularReducer,
    battleReducer,
  },
  middleware: () =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      createLogger({
        collapsed: true,
      })
    ),
});
