import axios from "axios"

const token = localStorage.getItem('token')

const config = {
        headers: {'authorization': `Bearer ${token}`},
        "Content-type": 'multipart/form-data'
}

 const editUserService = async (inputs) => {
        const response = await axios.put(process.env.REACT_APP_SERVER + '/user', inputs, config )
        return response
}

export default editUserService