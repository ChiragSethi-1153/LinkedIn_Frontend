import { Avatar, Box, Button, Divider, Stack } from '@mui/material'
import './Home.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/slice/post/postAction'
import Navbar from '../../components/Navbar/Navbar'
import { ReactComponent as MediaIcon } from '../../assets/media-icon.svg'
import { ReactComponent as CalendarIcon } from '../../assets/calendar-icon.svg'
import { ReactComponent as ArticleIcon } from '../../assets/article-icon.svg'

import Posts from '../../components/Post/Posts'
import CreatePost from '../../components/CreatePosts/CreatePost'
import { fetchPostReactions } from '../../redux/slice/reactions/reactionAction'


const Home = () => {

  const dispatch = useDispatch()
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
 
  
  const posts = useSelector((state) => state.posts.content)
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
    <Stack flexDirection={'column'} className='Home'>
      <Box className='home-nav'>
        <Navbar />
      </Box>
      <Box className='home-main'>
        <Stack
          gap={2.5}
          flexDirection={'row'}
          justifyContent={'center'}
          margin={'30px'}
        >
          <Stack gap={2}>
            <Stack className='side-profile'
             justifyContent={'center'}
             alignItems={'center'}
            >
            <Avatar sx={{
                    borderRadius: '100%',
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '5px'}} aria-label="recipe">
                  
                </Avatar>
              User details

            </Stack>

            <Box className='side-profile'>
              Recent
            </Box>
          </Stack>

          <Stack>
            <Stack className='AddPost'>
              <Stack flexDirection={'row'} gap={1}>
                
                <Avatar sx={{border: '1px solid #d7d8d6',
                    borderRadius: '100%',
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '5px'}} aria-label="recipe">
                  
                </Avatar>
                <Box
                  sx={{
                    border: '1px solid #d7d8d6',
                    borderRadius: '50px',
                    width: '84%',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    paddingLeft: "10px",
                    fontSize: '',
                    cursor: 'pointer',
                    '&:hover': {background: 'rgb(0,0,0,0.1)'}
                  }}
                  
                >
                 <Button 
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                    fontWeight: "500",
                    background:'none',
                    color: 'rgb(0,0,0,0.6)',
                    textTransform: 'none',
                    '&:hover': {background: 'none'}
                    }}
                    onClick={handleClickOpen}
                    >
                      Start a post
                    </Button> 
                    {open && <CreatePost hide={handleClose} />}
                </Box>
              </Stack>
              <Stack gap={12} flexDirection={'row'} height={'100%'} alignItems={'flex-end'} justifyContent={'center'}>
                <Button
                  className='create-post-btns'
                  startIcon={<MediaIcon />}
                >Media</Button>
                <Button 
                  className='create-post-btns'
                  startIcon={<CalendarIcon />}
                  >Event</Button>
                <Button className='create-post-btns' 
                startIcon={<ArticleIcon />}
                >Write article</Button>
              </Stack>
            </Stack>
            <Divider />
            {
              posts?.map((items) => {
                return (
                  <Stack className='display-posts' key={items._id}>
                    {/* {console.log(items._id)} */}
                    <Posts title={items.title} body={items.body} images={items.images} user={items.userId} postId={items._id}/>
                    
                  </Stack>
                )
              }
              )
            }

          </Stack>


          <Box className='home-news-section'>
            News
          </Box>


        </Stack>
      </Box>

    </Stack>
  )
}

export default Home

