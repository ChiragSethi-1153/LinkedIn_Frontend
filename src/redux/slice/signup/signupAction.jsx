import {createAsyncThunk} from '@reduxjs/toolkit'
import {type} from './signupType'
import signupService from '../../../services/Auth/signup.service'

export const registerUsers = createAsyncThunk(type, async (inputs, {rejectWithValue}) => {
    try{const response = await signupService(inputs)
    // console.log(response)
    const data = response.data
    // console.log(data)
    return data
}catch(err){
    console.log(err)
    return rejectWithValue(err)
}
})
