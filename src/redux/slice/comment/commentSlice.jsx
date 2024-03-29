import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "./commentAction";
import { createComment } from "./commentAction";

const commentSlice = createSlice({
    name: "comments",
    initialState: {
        isLoading: false,
        error: null,
        content: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.isLoading = false
            console.log("before",state.content)
            // state.content[action.payload.postId]
            state.content = {
                ...state.content, [action.payload.postId]: action.payload.data
                }
            console.log("get",state.content)
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(createComment.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createComment.fulfilled, (state, action) => {
            state.isLoading = false
            state.content[action.payload.postId].unshift(action.payload.data)
            console.log("post",action.payload.data)

        })
        builder.addCase(createComment.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default commentSlice.reducer