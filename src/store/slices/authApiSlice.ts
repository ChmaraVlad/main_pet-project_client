import { authApi } from "../../services/authApi";
import { User, logOut } from "./authSlice";

type Credentials = {
	email: string;
	password: string;
};

interface ApiResponse {
    accessToken: string;
    user: User;
}

export const authApiSlice = authApi.injectEndpoints({
  endpoints: builder => ({
      login: builder.mutation<ApiResponse, Credentials>({
        query: (credentials: Credentials) => ({
          url: 'login',
          method: 'POST',
          body: { ...credentials }
        })
      }),
      
      // sendLogOut: builder.mutation({
      //   query: () => ({
      //     url: '/auth/logout',
      //     method: 'POST',
      //   }),
      //   async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
      //     try {
      //       await queryFulfilled;
      //       dispatch(logOut(''));
      //       dispatch(authApi.util.resetApiState());
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   },
      // }),

    // refresh: builder.mutation({
    //   query: () => ({
    //     url: '/auth/refresh',
    //     method: 'GET',
    //   }),
    // }),
  })
})

export const {
    useLoginMutation
} = authApiSlice