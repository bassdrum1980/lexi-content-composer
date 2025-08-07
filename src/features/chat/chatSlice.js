import { createSlice } from "@reduxjs/toolkit";
import { llmApi } from "../../services/llmApi";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        text: action.payload.text,
        type: action.payload.type,
      });
    },
    resetMessages: (state) => {
      state.messages = [];
    },
  },
  extraReducers: (builder) => {
    // no need for data manipulation of incoming messages on the component side for now,
    // thus keeping response handling logic decoupled from the component
    builder.addMatcher(
      llmApi.endpoints.sendPrompt.matchFulfilled,
      (state, action) => {
        chatSlice.caseReducers.addMessage(state, {
          payload: { text: action.payload.response, type: "response" },
        });
      }
    );
  },
});

export const { addMessage, resetMessages } = chatSlice.actions;
export default chatSlice.reducer;
