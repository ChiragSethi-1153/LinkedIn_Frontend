import {createAsyncThunk} from '@reduxjs/toolkit'
import {type} from './types'
import signupService from '../../../services/signup.service'

export const registerUsers = createAsyncThunk(type, async (inputs) => {
    try{const response = await signupService(inputs)
    // console.log(response)
    const data = response.data
    // console.log(data)
    return data
}catch(err){
    console.log(err)
    return err
}
})
