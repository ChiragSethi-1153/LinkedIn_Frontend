import {createSlice} from '@reduxjs/toolkit'
import { createRoom } from './roomAction'


export const roomSlice = createSlice({
    name: 'room',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createRoom.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createRoom.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(createRoom.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default roomSlice.reducer