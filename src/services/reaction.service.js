import axios from "axios"

 const getReactionService = async (inputs, postId) => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER}/comments/${postId}`)
        return response
}

export default getReactionService
