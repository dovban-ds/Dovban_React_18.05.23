import { createLogger } from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import popularReducer from "./popular/popular.slice.ts";
import battleReducer from "./battle/battle.slice.ts";

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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
