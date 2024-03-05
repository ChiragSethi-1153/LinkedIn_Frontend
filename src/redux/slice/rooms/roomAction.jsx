import { createAsyncThunk} from '@reduxjs/toolkit'
import createRoomService from './../../../services/Rooms/createRoom.service';
import { fetchRoomType, roomType } from './roomType';
import fetchRoomService from '../../../services/Rooms/fetchRoom.service';


export const createRoom = createAsyncThunk(roomType, async ([id, user], {rejectWithValue}) => {
    try{
        // console.log(id, "  ", user)
        const inputs =  [id, user]
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

export const fetchRooms = createAsyncThunk(fetchRoomType, async (_, {rejectWithValue}) => {
    try{
       
        const response = await fetchRoomService()
        console.log(response)
        const data = response.data
        console.log(data)
        return data
    }catch(err){
        console.log(err)
        return rejectWithValue(err)
    }
})