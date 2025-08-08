import { saveState } from "../utils/local-storage";

export const persistMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  const state = storeAPI.getState();
  saveState({
    chat: state.chat,
    article: state.article,
  });

  return result;
};
