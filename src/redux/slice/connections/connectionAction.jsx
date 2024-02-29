import { createAsyncThunk} from '@reduxjs/toolkit'
import { connectionByType, connectionToType, sendRequestType, suggestionType, updateConnectionType } from './connectionType'
import connectionSent from '../../../services/sentConnection.service'
import requestSuggestionService from '../../../services/suggestion.service'
import sendConnectionRequestService from '../../../services/sendConnectionRequest.service'
import connectionRecieved from '../../../services/connectionRecieved.service'



export const requestSent = createAsyncThunk(connectionByType, async (_, {rejectWithValue}) => {
    try{
        const response = await connectionSent()
        // console.log(response)
        const data = response.data
        // console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})

export const requestRecieved = createAsyncThunk(connectionToType, async (_, {rejectWithValue}) => {
    try{
        const response = await connectionRecieved()
        console.log(response)
        const data = response.data
        console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})


export const requestSuggestions = createAsyncThunk(suggestionType, async(_, {rejectWithValue}) => {
    try{
        const response = await requestSuggestionService()
        // console.log(response)
        const data = response.data
        console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})

export const sendRequest = createAsyncThunk(sendRequestType, async (input, {rejectWithValue}) => {
    try{
        console.log(input)
        const response = await sendConnectionRequestService(input)
        console.log(response)
        // const data = response.data
        // console.log(data)
        // return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }})

    export const updateConnection = createAsyncThunk(updateConnectionType, async (input, {rejectWithValue}) => {
        try{
            console.log(input)
            const response = await sendConnectionRequestService(input)
            console.log(response)
            // const data = response.data
            // console.log(data)
            // return data
        }catch(err) {
            console.log(err)
            return rejectWithValue(err)
        }})