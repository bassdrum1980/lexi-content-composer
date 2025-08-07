import logger from "redux-logger";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { llmApi } from "../services/llmApi";
import chatReducer from "../features/chat/chatSlice";
import { persistMiddleware } from "../middleware/persistMiddleware";
import { loadState } from "../utils/local-storage";

const middleware = [];
const preloadedState = loadState();

if (import.meta.env.MODE === "development") {
  middleware.push(logger);
}

const rootReducer = combineReducers({
  [llmApi.reducerPath]: llmApi.reducer,
  chat: chatReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(middleware)
      .concat(llmApi.middleware)
      .concat(persistMiddleware),
  preloadedState,
  devTools: import.meta.env.MODE === "development",
});
