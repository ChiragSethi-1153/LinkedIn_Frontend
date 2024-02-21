import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "./commentAction";

const commentSlice = createSlice({
    name: "comments",
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default commentSlice.reducer