import { combineReducers } from "@reduxjs/toolkit"
import UserSlice from "../slice/UserSlice"
import LoginSlice from "../slice/LoginSlice"
import postSlice from "../slice/postSlice"

const rootReducer = combineReducers({
    user: UserSlice,
    login: LoginSlice,
    posts: postSlice
}
)
export default rootReducer