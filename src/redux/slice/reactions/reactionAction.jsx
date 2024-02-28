import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteReactionType, reactionPost, reactionType } from "./reactionType";
import getReactionService from "../../../services/reaction.service";
import postReactionService from "../../../services/postReaction.service";
import removeReactionService from './../../../services/removeReaction.service';

export const fetchPostReactions = createAsyncThunk(reactionType, async (postId, {rejectWithValue}) => {
    try {
        console.log(postId)
        const response = await getReactionService(postId)
        const data = response.data
        console.log(response.data)
        return {data, postId: postId}
    }
    catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})




export const createPostReaction = createAsyncThunk(reactionPost, async (input,{rejectWithValue}) => {
    try{
        console.log(input.postId)
        const response = await postReactionService(input)
        console.log(response)
        const data = response.data
        // console.log(data)
        return {data, postId: input.postId}
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})

export const deleteReaction = createAsyncThunk(deleteReactionType, async (input, {rejectWithValue}) => {
    try{
        const response = await removeReactionService(input)
        console.log(response)
        const data = response.data
        // console.log(data)
        return data
    }catch(err){
        console.log(err)
        return rejectWithValue(err)
    }
})