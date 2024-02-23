import {createSlice} from '@reduxjs/toolkit'
import { fetchUser } from './userAction'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        error: null,
        content: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default userSlice.reducer