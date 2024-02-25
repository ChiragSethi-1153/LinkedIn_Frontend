import { createAsyncThunk } from "@reduxjs/toolkit";
import getUserService from "../../../services/user.service";
import { userType } from "./userType";
import editUserService from "../../../services/editUser.service";
import { editUserType } from "./userType";


export const fetchUser = createAsyncThunk(userType, async () => {
    try {
        // console.log()
        const response = await getUserService()
        const data = response.data
        // console.log(response)
        return data
    }
    catch (err) {
        console.log(err)
        return err
    }
})

export const editUser = createAsyncThunk(editUserType, async (inputs) => {
    try{
        const response= await editUserService(inputs)
        const data = response.data
        console.log(data)
        return data

    }catch(err){
        console.log(err)
        return err
    }
})