import {createAsyncThunk} from '@reduxjs/toolkit'
import { type } from './type'

import postService from '../../../services/posts.service'


export const fetchPosts = createAsyncThunk(type, async (inputs) => {

    const response = await postService(inputs)
    // console.log(response)
    const data = response.data
    // console.log(data)
    return data
})


