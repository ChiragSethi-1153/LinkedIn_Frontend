import axios from "axios"

 const postService = async (time) => {
        console.log(time)
        if(time === 1){
                const response = await axios.get(process.env.REACT_APP_SERVER + '/posts')
                return response
        }
        else{
                const response = await axios.get(`${process.env.REACT_APP_SERVER}/posts?createdAt=${time}`)
                return response
        }
        
}

export default postService