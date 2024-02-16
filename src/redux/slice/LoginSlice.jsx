import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const loginUsers = createAsyncThunk('users/loginUsers', async (inputs) => {
    const response = await axios.post('http://localhost:8080/login', inputs)
    // console.log(response)
    const data = response.data
    localStorage.setItem('token', data.token)
    // console.log(data)
    return data
})

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUsers.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(loginUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(loginUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default loginSlice.reducer