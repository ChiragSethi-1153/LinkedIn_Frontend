import React from 'react'
import PostCard from '../Card/Card'
import { Box } from '@mui/material'

const Posts = ({title, body, images, user, postId}) => {
    // console.log(images)

    console.log(title, body, images, user, postId);
    
  return (
    <Box>
        <PostCard title={title} body ={body} images={images} user={user} postId={postId}/>
        
    </Box>
  )
}

export default Posts
