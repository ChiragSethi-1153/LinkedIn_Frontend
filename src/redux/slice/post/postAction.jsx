import {createAsyncThunk} from '@reduxjs/toolkit'
import { type } from './postType'

import postService from '../../../services/posts.service'


export const fetchPosts = createAsyncThunk(type, async () => {

    try{const response = await postService()
    // console.log(response)
    const data = response.data
    // console.log(data)
    return data
}catch(err){
    console.log(err)
    return (err)
}
})


