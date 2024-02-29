import {createSlice} from '@reduxjs/toolkit'
import { requestRecieved, requestSent, requestSuggestions } from './connectionAction'

export const connectionSlice = createSlice({
    name: 'connections',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(requestSent.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(requestSent.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(requestSent.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(requestRecieved.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(requestRecieved.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(requestRecieved.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(requestSuggestions.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(requestSuggestions.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
            console.log(action.payload)
        })
        builder.addCase(requestSuggestions.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        
    }
})

export default connectionSlice.reducer