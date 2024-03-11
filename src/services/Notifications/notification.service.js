import axios from "axios"

const fetchNotificationService = async (input) => {
    console.log(input)
    
    const response = await axios.get(`${process.env.REACT_APP_MICROSERVICE_URL}/notifications/${input}`)
    return response
}

export default fetchNotificationService