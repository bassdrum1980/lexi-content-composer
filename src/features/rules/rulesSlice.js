import { createSlice } from "@reduxjs/toolkit";
import { llmApi } from "../../services/llmApi";

const rulesSlice = createSlice({
  name: "rules",
  initialState: {
    rules: null,
  },
  reducers: {
    setRules: (state, action) => {
      state.rules = action.payload;
    },
    resetRules: (state) => {
      state.rules = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      llmApi.endpoints.sendPrompt.matchFulfilled,
      (state, action) => {
        // For now I'm subscribed to '/prompts' endpoint
        // Will have to change it to '/rules'
        rulesSlice.caseReducers.setRules(state, {
          payload: action.payload.rules,
        });
      }
    );
  },
});

export const { setRules, resetRules } = rulesSlice.actions;
export default rulesSlice.reducer;
