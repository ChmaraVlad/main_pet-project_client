import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../store/slices/authSlice'
import { RootState } from '../../store';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/v1/auth',
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState;
        const token = state.auth.accessToken
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions)

    if(result?.data) {
        console.log('saving user and accessToken after success request')
        api.dispatch(setCredentials({ ...result?.data }))
    }

    // if (result?.error?.originalStatus === 403) {
    //     console.log('sending refresh token')
    //     // send refresh token to get new access token 
    //     const refreshResult = await baseQuery('/refresh', api, extraOptions)
    //     console.log(refreshResult)
    //     if (refreshResult?.data) {
    //         const user = api.getState().auth.user
    //         // store the new token 
    //         api.dispatch(setCredentials({ ...refreshResult.data, user }))
    //         // retry the original query with new access token 
    //         result = await baseQuery(args, api, extraOptions)
    //     } else {
    //         api.dispatch(logOut())
    //     }
    // }

    return result
}

export const authApi = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})
