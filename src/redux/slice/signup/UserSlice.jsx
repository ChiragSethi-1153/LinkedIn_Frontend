import {createSlice} from '@reduxjs/toolkit'
import { registerUsers } from './action'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUsers.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(registerUsers.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(registerUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default userSlice.reducer