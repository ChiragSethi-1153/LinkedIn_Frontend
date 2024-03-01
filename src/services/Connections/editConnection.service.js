import axios from "axios"

const token = localStorage.getItem('token')
console.log(token)

const config = {
        headers: {'authorization': `Bearer ${token}`}
}

console.log(config)

 const editConnectionService = async (input) => {
        console.log(input)
        const response = await axios.put(`${process.env.REACT_APP_SERVER}/connection`, input, config)
        return response
}

export default editConnectionService
