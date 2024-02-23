import axios from "axios"

const token = localStorage.getItem('token')
// console.log(token)
const config = {
        headers: {'authorization': `Bearer ${token}`},
        "Content-type": 'application/json'
}

const postReactionService = async (inputs, {postId}) => {
    // console.log(inputs," " + postId)
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/reactions/${postId}`, inputs, config)
    // console.log(response)
    return response
}

export default postReactionService