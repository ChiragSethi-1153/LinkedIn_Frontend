import { createSlice } from "@reduxjs/toolkit";
import { createReaction, fetchReactions } from "./reactionAction";

const reactionSlice = createSlice({
    name: "reactions",
    initialState: {
        isLoading: false,
        error: null,
        content: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReactions.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(fetchReactions.fulfilled, (state, action) => {
            state.isLoading = false
            console.log("before", state.content)
            // state.content[action.payload.postId]
            state.content = {
                ...state.content,
                [action.payload.postId]: action.payload.data
                }
            console.log("get",state.content)
        })
        builder.addCase(fetchReactions.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(createReaction.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(createReaction.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload 
            console.log("post",action.payload.data)

        })
        builder.addCase(createReaction.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default reactionSlice.reducer