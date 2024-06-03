import { User } from "../../store/slices/auth/authSlice";
import { baseApi } from "../baseApi";

type Credentials = {
	email: string;
	password: string;
};

interface ApiResponse {
    user: User;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
      login: builder.mutation<ApiResponse, Credentials>({
        query: (credentials: Credentials) => ({
          url: '/v1/auth/login',
          method: 'POST',
          body: { ...credentials }
        })
      }),
      logout: builder.mutation({
        query: () => ({
          url: '/v1/auth/logout',
          method: 'POST',
        })
      })
  })
})

export const {
    useLoginMutation,
    useLogoutMutation
} = authApi
