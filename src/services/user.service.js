import axios from "axios"


const token = localStorage.getItem('token')
// console.log(token)
const config = {
        headers: {'authorization': `Bearer ${token}`},
        "Content-type": 'application/json'
}


 const getUserService = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER}/user`, config)
        return response
}

export default getUserService
