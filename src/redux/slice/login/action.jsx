import { createAsyncThunk} from '@reduxjs/toolkit'

import loginService from '../../../services/login.service'
import { type } from './type'


export const loginUsers = createAsyncThunk(type, async (inputs) => {
    try{
        const response = await loginService(inputs)
        // console.log(response)
        const data = response.data
        localStorage.setItem('token', data.token)
        // console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return err
    }
})