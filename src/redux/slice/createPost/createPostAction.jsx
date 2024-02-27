import { createAsyncThunk} from '@reduxjs/toolkit'
import newPostService from '../../../services/newPost.service'
import { type } from './createPostType'


export const createPost = createAsyncThunk(type, async (inputs, {rejectWithValue}) => {
    try{
        console.log(inputs)
        const response = await newPostService(inputs)
        // console.log(response)
        const data = response.data
        // console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})