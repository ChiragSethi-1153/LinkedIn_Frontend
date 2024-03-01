import axios from "axios"

const token = localStorage.getItem('token')
// console.log(token)
const config = {
        headers: {'authorization': `Bearer ${token}`}
}

 const requestSuggestionService = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER}/suggestions`, config)
        return response
}

export default requestSuggestionService
