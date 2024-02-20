import axios from "axios"

const token = localStorage.getItem('token')
console.log(token)
const config = {
        headers: {'authorization': `Bearer ${token}`},
        "Content-type": 'application/json'
}

 const newPostService = async (inputs) => {
        const response = await axios.post(process.env.REACT_APP_SERVER + '/post', inputs, config )
        return response
}

export default newPostService