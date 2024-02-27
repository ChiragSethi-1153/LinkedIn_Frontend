import axios from "axios"

const token = localStorage.getItem('token')

const config = {
        headers: {'authorization': `Bearer ${token}`},
        "Content-type": 'application/json'
}

 const connectionRecieved = async () => {
        const response = await axios.get(process.env.REACT_APP_SERVER + '/connectionby', config )
        return response
}

export default connectionRecieved