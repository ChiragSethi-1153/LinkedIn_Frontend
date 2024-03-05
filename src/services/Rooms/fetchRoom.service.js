import axios from "axios"

const token = localStorage.getItem('token')
const config = {
        headers: {'authorization': `Bearer ${token}`}
}

const fetchRoomService = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER}/rooms`, config)
    return response
}

export default fetchRoomService