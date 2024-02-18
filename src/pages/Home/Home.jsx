import { Box } from '@mui/material'
import './Home.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/slice/postSlice'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const posts = useSelector((state) => state.posts.content.response)
  const loading = useSelector((state) => state.posts.isLoading)
    const error = useSelector((state) => state.posts.error)
  console.log(posts)
    if (loading) {
      return "Loading..."
    }
    if (error) {
      return error
    }

  return (
    <Box className= 'Home'>
{
  posts?.map((item) => {
    return (
      <Box>
        {item.title}: <br /> {item.body}
      </Box>
    )
  })
}
    </Box>
  )
}

export default Home
