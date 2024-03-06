import {createSlice} from '@reduxjs/toolkit'
import { createMessage, fetchMessages } from './messageAction'


export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        isLoading: false,
        error: null,
        message: [],
        content: []
    },
    reducers: {
        addMessages(state, action) {
            console.log(action.payload, "wdwedwe")
            state.content = [...state.content, action.payload]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createMessage.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createMessage.fulfilled, (state, action) => {
            state.isLoading = false
            state.message = action.payload
            console.log(state.Messages)
        })
        builder.addCase(createMessage.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(fetchMessages.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchMessages.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export const {addMessages} = messageSlice.actions
export default messageSlice.reducer