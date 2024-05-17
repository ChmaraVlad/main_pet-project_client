import { authApi } from "../../../services/api";
import { User } from "./authSlice";

type Credentials = {
	email: string;
	password: string;
};

interface ApiResponse {
    user: User;
}

export const authApiSlice = authApi.injectEndpoints({
  endpoints: builder => ({
      login: builder.mutation<ApiResponse, Credentials>({
        query: (credentials: Credentials) => ({
          url: '/v1/auth/login',
          method: 'POST',
          body: { ...credentials }
        })
      }),
      getUser: builder.query({
        query: () => '/users/info'
      }),
      getUserAdminData: builder.query({
        query: () => '/users/admin'
      }),
  })
})

export const {
    useLoginMutation,
    useGetUserQuery,
    useGetUserAdminDataQuery
} = authApiSlice
