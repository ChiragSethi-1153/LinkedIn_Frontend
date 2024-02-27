import {createSlice} from '@reduxjs/toolkit'
import { requestRecieved } from './connectionAction'


export const connectionSlice = createSlice({
    name: 'connections',
    initialState: {
        isLoading: false,
        error: null,
        content: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(requestRecieved.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(requestRecieved.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(requestRecieved.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        
    }
})

export default connectionSlice.reducer