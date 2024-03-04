import { createAsyncThunk} from '@reduxjs/toolkit'
import createRoomService from './../../../services/Rooms/createRoom.service';
import { roomType } from './roomType';


export const createRoom = createAsyncThunk(roomType, async (inputs, {rejectWithValue}) => {
    try{
        console.log(inputs)
        const response = await createRoomService(inputs)
        console.log(response)
        const data = response.data
        console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})