import { createAsyncThunk} from '@reduxjs/toolkit'
import { type } from '../comment/commentType'
import postCommentService from '../../../services/postComment.service'


export const createComment = createAsyncThunk(type, async (inputs) => {
    try{
        console.log(inputs)
        const response = await postCommentService(inputs)
        // console.log(response)
        const data = response.data
        // console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return err
    }
})