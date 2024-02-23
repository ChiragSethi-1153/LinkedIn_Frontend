import { createAsyncThunk } from "@reduxjs/toolkit";
import getUserService from "../../../services/user.service";
import { userType } from "./userType";



export const fetchUser = createAsyncThunk(userType, async () => {
    try {
        console.log()
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

