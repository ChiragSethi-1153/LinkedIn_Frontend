import axios from "axios"

const token = localStorage.getItem('token')

const config = {
        headers: {'authorization': `Bearer ${token}`}
}

 const connectionRecieved = async () => {
        const response = await axios.get(process.env.REACT_APP_SERVER + '/connectionto', config )
        console.log(response)
        return response
}

export default connectionRecieved