import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jokesApi = createApi({
  reducerPath: 'jokes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://official-joke-api.appspot.com',
  }),
  endpoints: (builder) => ({
    getJokes: builder.mutation({
      query: () => `/jokes`,
    }),
    addJokes: builder.mutation({
      query: (joke) => `/jokes/${joke}`,
    }),
    deleteJoke: builder.mutation({
      query: (id) => `/jokes/${id}`,
    }),
    refreshJokes: builder.mutation({
        query: () => `/jokes`,
      }),
  }),
})


export const { useGetJokesQuery, useAddJokeMutation, useDeleteJokeMutation, useRefreshJokeMutation } = jokesApi;

