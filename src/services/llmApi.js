import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const llmApi = createApi({
  reducerPath: "llmApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_MOCK_SERVER_URL }),
  endpoints: (builder) => ({
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
