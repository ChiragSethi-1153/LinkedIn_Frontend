import axios from "axios"


const postCommentService = async (inputs) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/comment/${inputs}`)
    return response
}

export default postCommentService