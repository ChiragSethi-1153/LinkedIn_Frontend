import { combineReducers } from "@reduxjs/toolkit"
import postSlice from "../slice/post/postSlice"
import createPostSlice from "../slice/createPost/createPostSlice"
import commentSlice from "../slice/comment/commentSlice"
import signupSlice from "../slice/signup/singupSlice"
import userSlice from "../slice/user/userSlice"
import reactionSlice from "../slice/reactions/reactionSlice"
import connectionSlice from "../slice/connections/connectionSlice"
import roomSlice from "../slice/rooms/roomSlice"
import messageSlice from "../slice/messages/messageSlice"
// import loginSlice from "../slice/login/loginSlice"
import loginSlice  from './../slice/login/LoginSlice';
import notificationSlice from "../slice/notifications/notificationSlice"



const rootReducer = combineReducers({
    signup: signupSlice,
    login: loginSlice,
    posts: postSlice,
    newPost: createPostSlice,
    comment: commentSlice,
    user: userSlice,
    reactions: reactionSlice,
    connections: connectionSlice,
    room: roomSlice,
    message: messageSlice,
    notifications: notificationSlice
}
)
export default rootReducer

