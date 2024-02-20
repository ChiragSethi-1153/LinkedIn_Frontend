import axios from "axios"

 const newPostService = async (inputs) => {
        const response = await axios.post(process.env.REACT_APP_SERVER + '/post', inputs)
        return response
}

export default newPostService