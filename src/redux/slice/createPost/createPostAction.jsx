import { createAsyncThunk} from '@reduxjs/toolkit'
import newPostService from '../../../services/newPost.service'
import { type } from './createPostType'
import { addNewPost } from '../post/postSlice'


export const createPost = createAsyncThunk(type, async (inputs, {rejectWithValue,dispatch}) => {
    try{
        console.log(inputs)
        const response = await newPostService(inputs)
        console.log(response)
        const data = response.data
        console.log(data, 'csdcdsc')
        if(Object.keys(data?.response).length){
            dispatch(addNewPost(data?.response))
        }
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})