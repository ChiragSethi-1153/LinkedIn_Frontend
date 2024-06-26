import {createSlice} from '@reduxjs/toolkit'
import { loginUsers } from './loginAction'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        isLoggedIn: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUsers.pending, (state) => {
            state.isLoading = true
            state.isLoggedIn = false
        })
        builder.addCase(loginUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.isLoggedIn = true
            state.content = action.payload
        })
        builder.addCase(loginUsers.rejected, (state, action) => {
            state.isLoading = false
            state.isLoggedIn = false
            state.error = action.error
        })
    }
})

export default loginSlice.reducer