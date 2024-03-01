import {createSlice} from '@reduxjs/toolkit'
import { requestRecieved, requestSent, requestSuggestions, updateConnection } from './connectionAction'

export const connectionSlice = createSlice({
    name: 'connections',
    initialState: {
        isLoading: false,
        error: null,
        content: [],
        received: [],
        sent: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(requestSent.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(requestSent.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.sent = [...action.payload.response]
            console.log(state.sent)
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
            state.error = null
            state.received = [...action.payload] 
            console.log(state.received)
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
            state.error = null
            state.content = [...action.payload] 
            console.log(action.payload)
            console.log(state.content)
        })
        builder.addCase(requestSuggestions.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(updateConnection.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(updateConnection.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.content = [...action.payload]
            console.log(state.content)
        })
        builder.addCase(updateConnection.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default connectionSlice.reducer