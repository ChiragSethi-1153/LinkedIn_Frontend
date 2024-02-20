import axios from "axios"

 const loginService = async (inputs) => {
    try {

        const response = await axios.post(process.env.REACT_APP_SERVER + '/login', inputs)
        return response
    } catch (err) {
        console.log(err)
        return err
    }
}

export default loginService