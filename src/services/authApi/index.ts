// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/v1/auth' }),
  tagTypes: ['Login'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({email, password}) => ({
        url: `login`,
        method: 'POST',
        body: {email, password},
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = authApi