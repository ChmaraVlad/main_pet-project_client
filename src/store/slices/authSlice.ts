import { createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, accessToken: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.accessToken = accessToken
        },
        logOut: (state, action) => {
            state.user = null
            state.accessToken = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

// export const selectCurrentUser = (state: RootState) => state.auth.user
// export const selectCurrentAccessToken = (state: RootState) => state.auth.accessToken
