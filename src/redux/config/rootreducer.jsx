import { combineReducers } from "@reduxjs/toolkit"
import UserSlice from "../slice/UserSlice"
import LoginSlice from "../slice/LoginSlice"

const rootReducer = combineReducers({
    user: UserSlice,
    login: LoginSlice
}
)
export default rootReducer