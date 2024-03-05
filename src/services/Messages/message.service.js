import axios from "axios"

const token = localStorage.getItem('token')
const config = {
        headers: {'authorization': `Bearer ${token}`}
}

const fetchMessageService = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER}/messages`, config)
    return response
}

export default fetchMessageService