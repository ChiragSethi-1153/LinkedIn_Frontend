import axios from "axios"

const token = localStorage.getItem('token')
const config = {
        headers: {'authorization': `Bearer ${token}`},
        "Content-type": 'application/json'
}

const createMessageService = async (inputs) => {
    console.log(inputs)
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/message`, inputs, config)
    return response
}

export default createMessageService