import {createSlice} from '@reduxjs/toolkit'
import { fetchPosts } from './action'


export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default postSlice.reducer