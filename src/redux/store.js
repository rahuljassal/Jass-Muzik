import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: process.env.NODE_ENV !== "production",
});
