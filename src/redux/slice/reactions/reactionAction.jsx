import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteReactionType, reactionPost, reactionType } from "./reactionType";
import getReactionService from "../../../services/Reactions/reaction.service";
import postReactionService from "../../../services/Reactions/postReaction.service";
import removeReactionService from './../../../services/Reactions/removeReaction.service';
import axios from "axios";

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

export const addPostReaction = createAsyncThunk(
    "reaction/addPostReaction",
    async (data, { getState, rejectWithValue }) => {
        try {
            let token = getState().persistedReducer.token;
            let response = await axios.post(`${process.env.REACT_SERVER}/reactions/${data.postId}`, { reaction: data.newReaction }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            return { postId: data.postId, response };
        } catch (error) {
            return rejectWithValue(error);
        }
    });


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