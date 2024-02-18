import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (inputs) => {
    const response = await axios.get('http://localhost:8080/posts', inputs)
    // console.log(response)
    const data = response.data
    // console.log(data)
    return data
})

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