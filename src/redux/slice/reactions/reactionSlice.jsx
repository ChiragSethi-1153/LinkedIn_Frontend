import { createSlice } from "@reduxjs/toolkit";
import { createPostReaction, fetchPostReactions } from "./reactionAction";



const reactionSlice = createSlice({
    name: "reactions",
    initialState: {
        isLoading: false,
        error: null,
        isUpdate: false,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostReactions.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPostReactions.fulfilled, (state, action) => {
            state.isLoading = false
            // console.log(action.payload)
            // console.log("before", state.content)
            // state.content[action.payload.postId]
            state.content = {...state.content, [action.payload.postId]: action.payload.data}
                // console.log("get", state.content)
            // {
            //     ...state.content,
            //     [action.payload.postId]: action.payload.data
            //     }
            // console.log("get",state.content)
        })
        builder.addCase(fetchPostReactions.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(createPostReaction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createPostReaction.fulfilled, (state, action) => {
            state.isLoading = false
            state.isUpdate = true
            console.log("post", action.payload.data)
            state.content[action.payload.postId].currReaction = [{...action.payload.data.response}] 
            
            console.log(state.content[action.payload.postId].currReaction)

        })
        builder.addCase(createPostReaction.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default reactionSlice.reducer