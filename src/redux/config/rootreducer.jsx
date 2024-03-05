import { combineReducers } from "@reduxjs/toolkit"
import LoginSlice from "../slice/login/loginSlice"
import postSlice from "../slice/post/postSlice"
import createPostSlice from "../slice/createPost/createPostSlice"
import commentSlice from "../slice/comment/commentSlice"
import signupSlice from "../slice/signup/singupSlice"
import userSlice from "../slice/user/userSlice"
import reactionSlice from "../slice/reactions/reactionSlice"
import connectionSlice from "../slice/connections/connectionSlice"
import roomSlice from "../slice/rooms/roomSlice"
import messageSlice from "../slice/messages/messageSlice"


const rootReducer = combineReducers({
    signup: signupSlice,
    login: LoginSlice,
    posts: postSlice,
    newPost: createPostSlice,
    comment: commentSlice,
    user: userSlice,
    reactions: reactionSlice,
    connections: connectionSlice,
    room: roomSlice,
    message: messageSlice,
}
)
export default rootReducer

