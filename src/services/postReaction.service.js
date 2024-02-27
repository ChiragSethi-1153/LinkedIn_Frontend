import axios from "axios"

const token = localStorage.getItem('token')
// console.log(token)
const config = {
        headers: {'authorization': `Bearer ${token}`},
        "Content-type": 'application/json'
}

const postReactionService = async (input) => {
        console.log(input.postId)
        const emoji = {emoji: input.reaction}
        console.log(emoji)
        const response = await axios.post(`${process.env.REACT_APP_SERVER}/reactions/${input.postId}`, emoji, config)
    // console.log(response)
    return response
}

export default postReactionService