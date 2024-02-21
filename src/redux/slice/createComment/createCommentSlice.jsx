import {createSlice} from '@reduxjs/toolkit'
import { createComment } from './createCommentAction'

export const createPostSlice = createSlice({
    name: 'comment',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createComment.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(createComment.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(createComment.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default createPostSlice.reducer