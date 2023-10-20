import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://opentdb.com/api.php',
  }),
  endpoints: builder => ({
    getQuestions: builder.query({
      query: (params) => ({
        url: '',
        params,
      }),
    }),
  }),
});

export const { useLazyGetQuestionsQuery } = questionsApi;
