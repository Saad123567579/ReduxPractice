
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `accounts`,
    }),
    postAccounts: builder.mutation({
        query: (amount,id) => ({ url:'accounts',method:'POST',body:{amount,id} }),
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAccountsQuery,usePostAccountsMutation } = adminApi