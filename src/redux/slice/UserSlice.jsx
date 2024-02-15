import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const registerUsers = createAsyncThunk('users/registerUsers', async (inputs) => {
    const response = await axios.post('https://localhost:8080/signup', inputs)
    const data = response.data
    return data
})

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: true,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(registerUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(registerUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default userSlice.reducer