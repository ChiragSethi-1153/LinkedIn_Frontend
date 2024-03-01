import axios from "axios"

const token = localStorage.getItem('token')

const config = {
        headers: {'authorization': `Bearer ${token}`}
}

 const connectionSent = async () => {
        const response = await axios.get(process.env.REACT_APP_SERVER + '/connectionby', config )
        console.log(response)
        return response
}

export default connectionSent