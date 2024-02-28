import axios from "axios"

const token = localStorage.getItem('token')
// console.log(token)
const config = {
        headers: {'authorization': `Bearer ${token}`}
}

 const removeReactionService = async (postId) => {
        const response = await axios.delete(`${process.env.REACT_APP_SERVER}/reaction/${postId}`, config)
        return response
}

export default removeReactionService
