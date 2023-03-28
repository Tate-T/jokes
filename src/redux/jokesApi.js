import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jokesApi = createApi({
  reducerPath: 'jokes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://official-joke-api.appspot.com/jokes',
  }),
  endpoints: (builder) => ({
    getJokes: builder.query({
      query: () => `/ten`,
    }),
    addJoke: builder.mutation({
      query(jokeId) {
        return {
          url: `/`,
          method: 'PUT',
          body: { jokeId },
        }
      }
      }),
    deleteJoke: builder.mutation({
      query: (id) => `/${id}`,
    }),
    // refreshJokes: builder.query({
    //     query: () => `/random`,
    //   }),
  }),
})


export const { useGetJokesQuery, useAddJokeMutation, useDeleteJokeMutation, useRefreshJokesMutation } = jokesApi;

