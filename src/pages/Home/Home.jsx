import { Avatar, Box, Button, Divider, Stack } from '@mui/material'
import './Home.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/slice/post/action'
import Navbar from '../../components/Navbar/Navbar'
import { ReactComponent as MediaIcon } from '../../assets/media-icon.svg'
import { ReactComponent as CalendarIcon } from '../../assets/calendar-icon.svg'
import { ReactComponent as ArticleIcon } from '../../assets/article-icon.svg'

import Posts from '../../components/Post/Posts'

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
            <Avatar sx={{border: '1px solid #d7d8d6',
                    borderRadius: '100%',
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '5px'}} aria-label="recipe">
                  R
                </Avatar>
              User details

            </Stack>

            <Box className='side-profile'>
              News
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
                  R
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
                    paddingLeft: "20px",
                    fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                    fontWeight: "500",
                    fontSize: ''
                  }}
                >
                  Start a post
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
                >Write Article</Button>
              </Stack>
            </Stack>
            <Divider />
            {
              posts?.map((items) => {
                return (
                  <Stack className='display-posts'>
                    <Posts title={items.title} body={items.body} />
                    {/* <Box>{items.title} : </Box> 
                 <Box>{items.body}</Box> */}
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

// {
//   posts?.map((item) => {
//     return (
//       <Box>
//         {item.title}: {item.body}
//       </Box>
//     )
//   })
// }