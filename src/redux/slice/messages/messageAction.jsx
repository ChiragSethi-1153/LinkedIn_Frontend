import { createAsyncThunk} from '@reduxjs/toolkit'
import createMessageService from '../../../services/Messages/createMessage.service';
import fetchMessageService from '../../../services/Messages/message.service';
import { fetchMessageType, messageType } from './messageType';


export const createMessage = createAsyncThunk(messageType, async (inputs, {rejectWithValue}) => {
    try{
        // console.log(id, "  ", user)
        // const inputs =  [id, user]
        console.log(inputs)
        const response = await createMessageService(inputs)
        console.log(response)
        const data = response.data
        console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})

export const fetchMessages = createAsyncThunk(fetchMessageType, async (roomId, {rejectWithValue}) => {
    try{
        console.log(roomId)
        const response = await fetchMessageService(roomId)
        console.log(response)
        const data = response.data
        console.log(data)
        return data
    }catch(err){
        console.log(err)
        return rejectWithValue(err)
    }
})