import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jokesApi = createApi({
  reducerPath: 'jokes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://official-joke-api.appspot.com/jokes',
  }),
  endpoints: (builder) => ({
    getJokes: builder.mutation({
      query: () => `/ten`,
    }),
    addJokes: builder.mutation({
      query: (joke) => `/jokes/${joke}`,
    }),
    deleteJoke: builder.mutation({
      query: (id) => `/jokes/${id}`,
    }),
    refreshJokes: builder.mutation({
        query: () => `/ten`,
      }),
  }),
})


export const { useGetJokesQuery, useAddJokeMutation, useDeleteJokesMutation, useRefreshJokeMutation } = jokesApi;

