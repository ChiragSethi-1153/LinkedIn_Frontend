import { createAsyncThunk } from "@reduxjs/toolkit";
import { type } from "./commentType";

import {Type } from './commentType'
import postCommentService from '../../../services/postComment.service'
import getCommentService from "../../../services/comment.service";

export const fetchComments = createAsyncThunk(type, async (inputs) => {
    try {
        console.log(inputs)
        const response = await getCommentService(inputs)
        const data = response.data
        console.log(response)
        return {data,postId:inputs}
    }
    catch (err) {
        console.log(err)
        return err
    }
})




export const createComment = createAsyncThunk(Type, async (inputs) => {
    try{
        console.log(inputs)
        const response = await postCommentService(inputs)
        console.log(response)
        const data = response.data
        // console.log(data)
        return {data ,postId:inputs.postId}
    }catch(err) {
        console.log(err)
        return err
    }
})