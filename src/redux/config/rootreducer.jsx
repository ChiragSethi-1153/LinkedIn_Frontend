import { combineReducers } from "@reduxjs/toolkit"
import UserSlice from "../slice/signup/UserSlice"
import LoginSlice from "../slice/login/LoginSlice"
import postSlice from "../slice/post/postSlice"

const rootReducer = combineReducers({
    user: UserSlice,
    login: LoginSlice,
    posts: postSlice
}
)
export default rootReducer