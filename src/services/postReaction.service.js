import axios from "axios"

const token = localStorage.getItem('token')
// console.log(token)
const config = {
        headers: {'authorization': `Bearer ${token}`},
        "Content-type": 'application/json'
}

const postReactionService = async (emoji, postId) => {
        // console.log(postId)
        const response = await axios.post(`${process.env.REACT_APP_SERVER}/reactions/${postId}`, emoji, config)
    // console.log(response)
    return response
}

export default postReactionService