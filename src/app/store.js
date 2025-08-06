import logger from "redux-logger";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { llmApi } from "../services/llmApi";
import chatReducer from "../features/chat/chat";

const middleware = [];

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
    getDefaultMiddleware().concat(middleware).concat(llmApi.middleware),
  devTools: import.meta.env.MODE === "development",
});
