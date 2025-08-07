import { createSlice } from "@reduxjs/toolkit";
import { llmApi } from "../../services/llmApi";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    article: null,
  },
  reducers: {
    setArticle: (state, action) => {
      state.article = action.payload;
    },
    resetArticle: (state) => {
      state.article = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      llmApi.endpoints.sendPrompt.matchFulfilled,
      (state, action) => {
        // Assuming the response contains the article data
        // TODO: conditional logic to handle different types of responses
        articleSlice.caseReducers.setArticle(state, {
          payload: action.payload.article,
        });
      }
    );
  },
});

export const { setArticle, resetArticle } = articleSlice.actions;
export default articleSlice.reducer;
