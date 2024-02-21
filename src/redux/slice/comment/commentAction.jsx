import { createAsyncThunk } from "@reduxjs/toolkit";
import { type } from "./commentType";
import getCommentService from "../../../services/comment.service";

export const fetchComments = createAsyncThunk(type, async (inputs) => {
    try {
        // console.log(inputs)
        const response = await getCommentService(inputs)
        const data = response.data
        // console.log(response)
        return data
    }
    catch (err) {
        console.log(err)
        return err
    }
})