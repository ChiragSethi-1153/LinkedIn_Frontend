import axios from "axios"

 const postService = async () => {
        const response = await axios.get(process.env.REACT_APP_SERVER + '/posts')
        return response
}

export default postService