import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const llmApi = createApi({
  reducerPath: "llmApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_MOCK_SERVER_URL }),
  endpoints: (builder) => ({
    // For now I'm hitting the same endpoint for all types of prompts.
    // In theory I should expect — article, rules, cards, chat message.
    sendPrompt: builder.mutation({
      query: (prompt) => ({
        url: "prompts",
        method: "POST",
        body: { prompt },
      }),
    }),
  }),
});

export const { useSendPromptMutation } = llmApi;
