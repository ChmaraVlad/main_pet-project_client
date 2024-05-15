import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { setCredentials } from '../../store/slices/auth/authSlice'



const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    credentials: 'include',
})

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    console.log({args, api, extraOptions});
    
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
    endpoints: builder => ({}),
    reducerPath: "api",
})
