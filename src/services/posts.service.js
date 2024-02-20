import axios from "axios"

 const postService = async (inputs) => {
    try {

        const response = await axios.get(process.env.REACT_APP_SERVER + '/posts', inputs)
        return response
    } catch (err) {
        console.log(err)
        return err
    }
}

export default postService