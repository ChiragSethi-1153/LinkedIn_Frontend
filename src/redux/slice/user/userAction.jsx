import { createAsyncThunk } from "@reduxjs/toolkit";
import { userType, editUserType } from "./userType";
import editUserService from "../../../services/User/editUser.service";
import getUserService from "../../../services/User/user.service";


export const fetchUser = createAsyncThunk(userType, async (_,{rejectWithValue}) => {
    try {
        // console.log()
        const response = await getUserService()
        const data = response.data
        // console.log(response)
        return data
    }
    catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})

export const editUser = createAsyncThunk(editUserType, async (inputs, {rejectWithValue}) => {
    try{
        console.log()
        const response= await editUserService(inputs)
        const data = response.data
        console.log(data)
        return data

    }catch(err){
        console.log(err)
        return rejectWithValue(err)
    }
})