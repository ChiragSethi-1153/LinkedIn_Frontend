import axios from "axios"

 const postService = async (inputs) => {
        const response = await axios.get(process.env.REACT_APP_SERVER + '/posts', inputs)
        return response
}

export default postService