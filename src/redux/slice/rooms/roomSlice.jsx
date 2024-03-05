import {createSlice} from '@reduxjs/toolkit'
import { createRoom, fetchRooms } from './roomAction'


export const roomSlice = createSlice({
    name: 'room',
    initialState: {
        isLoading: false,
        error: null,
        rooms: [],
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createRoom.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createRoom.fulfilled, (state, action) => {
            state.isLoading = false
            state.rooms = action.payload
            console.log(state.rooms)
        })
        builder.addCase(createRoom.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(fetchRooms.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchRooms.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default roomSlice.reducer