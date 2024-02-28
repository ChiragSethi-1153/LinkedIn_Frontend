import {createSlice} from '@reduxjs/toolkit'
import { requestSent } from './connectionAction'


export const connectionSlice = createSlice({
    name: 'connections',
    initialState: {
        isLoading: false,
        error: null,
        content: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(requestSent.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(requestSent.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(requestSent.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        
    }
})

export default connectionSlice.reducer