import { createAsyncThunk } from "@reduxjs/toolkit";
import { notificationType } from "./notificationType";
import fetchNotificationService from "../../../services/Notifications/notification.service";

export const fetchNotifications = createAsyncThunk(notificationType, async(input, {rejectWithValue}) => {
    try{
        console.log(input)
        const response = await fetchNotificationService(input)
        console.log(response)
        const data = response.data
        console.log(data)
        return data
    }catch(err){
        console.log(err)
        return rejectWithValue(err)
    }
})