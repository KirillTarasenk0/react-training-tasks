import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
   reducerPath: 'postApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://studapi.teachmeskills.by/blog/',
   }),
   endpoints: (builder) => ({
      getTotalPosts: builder.query({
         query: () => 'posts/?limit=1&offset=0',
      }),
      getAllPosts: builder.query({
         query: (limit) => `posts/?limit=${limit}&offset=0`,
      }),
   }),
});

export const { useGetTotalPostsQuery, useGetAllPostsQuery } = postApi;
