import axios from "axios"

 const getCommentService = async (inputs) => {
       
        const response = await axios.get(`${process.env.REACT_APP_SERVER}/comments/${inputs}`)
        return response
}

export default getCommentService
