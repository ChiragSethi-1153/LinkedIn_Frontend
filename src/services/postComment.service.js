import axios from "axios"

const token = localStorage.getItem('token')
console.log(token)
const config = {
        headers: {'authorization': `Bearer ${token}`},
        "Content-type": 'application/json'
}

const postCommentService = async (inputs) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/comment`, inputs, config)
    return response
}

export default postCommentService