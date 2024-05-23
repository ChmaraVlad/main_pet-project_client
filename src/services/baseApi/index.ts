import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { setCredentials } from '../../store/slices/auth/authSlice'
import { logOut } from '../../store/slices/user/userSlice';



const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    credentials: 'include',
    mode: "cors",
})

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions)

    if(result?.data) {
        api.dispatch(setCredentials({ ...result?.data }))
    }

    if (result?.error?.status === 401) {
        const refreshResult = await baseQuery('/v1/auth/refresh', api, extraOptions)
        if (refreshResult?.data) {
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
            if(result.data) api.dispatch(setCredentials({ ...result?.data }))
        } else {
            const auth = api.getState().auth
            api.dispatch(logOut(auth))
        }
    }

    return result
}

export const baseApi = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({}),
    reducerPath: "baseApi",
})
