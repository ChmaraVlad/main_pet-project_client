import { createSlice } from "@reduxjs/toolkit"

export type User = {
    email: string
    username: string
}

type InitState = {user: User | null, accessToken: string | null}

const initialState: InitState = { user: null, accessToken: null }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user }: {user: User} = action.payload
            state.user = user
        },
        logOut: (state, action) => {
            state.user = null
            state.accessToken = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer
