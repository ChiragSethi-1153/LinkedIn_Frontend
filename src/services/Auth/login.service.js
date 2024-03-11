import axios from "axios"

 const loginService = async (inputs) => {
        const response = await axios.post(process.env.REACT_APP_SERVER + '/login', inputs)
        const token = localStorage.getItem('token')
        if(token){
            localStorage.removeItem('token')
            localStorage.setItem('token', response.data.token)
        }
        else{
            localStorage.setItem('token', response.data.token)
        }
        return response
    }

export default loginService