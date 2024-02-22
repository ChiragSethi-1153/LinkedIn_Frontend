import { combineReducers } from "@reduxjs/toolkit"
import UserSlice from "../slice/signup/userSlice"
import LoginSlice from "../slice/login/loginSlice"
import postSlice from "../slice/post/postSlice"
import createPostSlice from "../slice/createPost/createPostSlice"
import commentSlice from "../slice/comment/commentSlice"
// import createComment  from "../slice/createComment/createCommentSlice"


const rootReducer = combineReducers({
    user: UserSlice,
    login: LoginSlice,
    posts: postSlice,
    newPost: createPostSlice,
    comment: commentSlice,
}
)
export default rootReducer