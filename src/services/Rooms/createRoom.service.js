import axios from "axios"

const token = localStorage.getItem('token')
const config = {
        headers: {'authorization': `Bearer ${token}`},
        "Content-type": 'application/json'
}

const createRoomService = async (inputs) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/room`, inputs, config)
    return response
}

export default createRoomService