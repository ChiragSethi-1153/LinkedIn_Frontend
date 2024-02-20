import React from 'react'
import PostCard from '../Card/Card'
import { Box } from '@mui/material'

const Posts = ({title, body}) => {
    // console.log(title)
  return (
    <Box>
        <PostCard title={title} body ={body} />
        
    </Box>
  )
}

export default Posts
