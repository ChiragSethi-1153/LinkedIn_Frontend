import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const registerUsers = createAsyncThunk('users/registerUsers', async (inputs) => {
    const response = await axios.post('http://localhost:8080/signup', inputs)
    // console.log(response)
    const data = response.data
    // console.log(data)
    return data
})

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUsers.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(registerUsers.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(registerUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default userSlice.reducer