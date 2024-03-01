import { createAsyncThunk} from '@reduxjs/toolkit'

import loginService from '../../../services/Auth/login.service'
import { type } from './loginType'


export const loginUsers = createAsyncThunk(type, async (inputs, {rejectWithValue}) => {
    try{
        const response = await loginService(inputs)
        // console.log(response)
        const data = await response.data
        localStorage.setItem('token', data.token)
        // console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})