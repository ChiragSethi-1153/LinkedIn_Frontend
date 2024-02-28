import { createAsyncThunk} from '@reduxjs/toolkit'
import { connectionByType } from './connectionType'
import connectionSent from '../../../services/sentConnection.service'



export const requestSent = createAsyncThunk(connectionByType, async (_, {rejectWithValue}) => {
    try{
        const response = await connectionSent()
        // console.log(response)
        const data = response.data
        // console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})