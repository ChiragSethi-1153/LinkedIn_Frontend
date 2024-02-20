import {createSlice} from '@reduxjs/toolkit'
import { createPost } from './createPostAction'

export const createPostSlice = createSlice({
    name: 'post',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createPost.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(createPost.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default createPostSlice.reducer