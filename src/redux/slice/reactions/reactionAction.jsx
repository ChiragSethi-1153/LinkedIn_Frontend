import { createAsyncThunk } from "@reduxjs/toolkit";
import { reactionPost, reactionType } from "./reactionType";
import getReactionService from "../../../services/reaction.service";
import postReactionService from "../../../services/postReaction.service";


export const fetchReactions = createAsyncThunk(reactionType, async (inputs) => {
    try {
        console.log(inputs)
        const response = await getReactionService(inputs)
        const data = response.data
        // console.log(response)
        return {data, postId:inputs}
    }
    catch (err) {
        console.log(err)
        return err
    }
})




export const createReaction = createAsyncThunk(reactionPost, async (reaction, postId) => {
    try{
        console.log(reaction, postId)
        const response = await postReactionService(reaction, postId)
        console.log(response)
        const data = response.data
        // console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return err
    }
})