import { createAsyncThunk} from '@reduxjs/toolkit'
import { connectionByType } from './connectionType'
import connectionRecieved from '../../../services/requestConnection.service'



export const requestRecieved = createAsyncThunk(connectionByType, async (_, {rejectWithValue}) => {
    try{
        const response = await connectionRecieved()
        // console.log(response)
        const data = response.data
        // console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})