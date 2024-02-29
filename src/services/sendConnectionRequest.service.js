import axios from "axios"

const token = localStorage.getItem('token')
console.log(token)

const config = {
        headers: {'authorization': `Bearer ${token}`}
}

console.log(config)

 const sendConnectionRequestService = async (input) => {
        console.log(input)
        const receiver = {Id: input}
        const response = await axios.post(`${process.env.REACT_APP_SERVER}/connection`, receiver, config)
        return response
}

export default sendConnectionRequestService
