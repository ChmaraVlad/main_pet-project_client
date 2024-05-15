import { createSlice } from "@reduxjs/toolkit"

export type User = {
    email: string
    username: string
}

type InitState = {user: User | null}

const initialState: InitState = { user: null }

const usersSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user }: {user: User} = action.payload
            state.user = user
        },
        logOut: (state) => {
            state.user = null
        }
    },
})

export const { setCredentials, logOut } = usersSlice.actions

export default usersSlice.reducer
