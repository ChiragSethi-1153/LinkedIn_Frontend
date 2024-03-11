import {createSlice} from '@reduxjs/toolkit'
import { fetchNotifications } from './notificationAction'


export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {
        addNotifications(state, action) {
            console.log(action.payload, "wdwedwe")
            state.content = [...state.content, action.payload]
        }
    },
    extraReducers: (builder) => {
        
        builder.addCase(fetchNotifications.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchNotifications.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchNotifications.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export const {addNotifications} = notificationSlice.actions
export default notificationSlice.reducer