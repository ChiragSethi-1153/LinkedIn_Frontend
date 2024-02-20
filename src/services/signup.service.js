import axios from "axios"

 const signupService = async (inputs) => {
    try {
        const response = await axios.post(process.env.REACT_APP_SERVER + '/signup', inputs)
        return response
    } catch (err) {
        console.log(err)
        return err
    }
}

export default signupService
