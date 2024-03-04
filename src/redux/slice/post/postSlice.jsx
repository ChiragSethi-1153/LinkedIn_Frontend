import {createSlice} from '@reduxjs/toolkit'
import { fetchPosts } from './postAction'


export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {
        addNewPost(state,{payload}){
            state.content.unshift(payload) 
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.content.push(...action.payload?.response)
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export const {addNewPost} = postSlice.actions
export default postSlice.reducer