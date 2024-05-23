import { baseApi } from "../baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
      getUser: builder.query({
        query: () => '/users/info'
      }),
      getUserAdminData: builder.query({
        query: () => '/users/admin'
      }),
  })
})

export const {
    useGetUserQuery,
    useGetUserAdminDataQuery,
} = userApi
