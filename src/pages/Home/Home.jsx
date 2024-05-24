import { Avatar, Box, Button, ButtonGroup, Divider, Stack, Typography } from '@mui/material'
import './Home.css'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/slice/post/postAction'

import { ReactComponent as MediaIcon } from '../../assets/media-icon.svg'
import { ReactComponent as CalendarIcon } from '../../assets/calendar-icon.svg'
import { ReactComponent as ArticleIcon } from '../../assets/article-icon.svg'

import CreatePost from '../../components/CreatePosts/CreatePost'
import News from '../../components/News/News'
import { fetchUser } from '../../redux/slice/user/userAction'
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import PhotoSizeSelectActualRoundedIcon from "@mui/icons-material/PhotoSizeSelectActualRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import FooterPanel from '../../components/FooterPanel/FooterPanel'
import PostCard from '../../components/Card/Card'

const Home = ({ socket }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  // const bottom = useRef(null);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const posts = useSelector((state) => state.posts.content)

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchPosts())
  }, [dispatch])


  const user = useSelector((state) => state?.user?.content)

  useEffect(() => {
    socket.emit("notification-room", user._id)
  }, [socket, user._id])

  const loading = useSelector((state) => state?.posts?.isLoading)
  const error = useSelector((state) => state?.posts?.error)


  // const time = posts[posts.length-1]?.createdAt
  // console.log(time)

  // useEffect(() => {

  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {      
  //         dispatch(fetchPosts(time))
  //     }
  //   });
  //   observer.observe(bottom.current);
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [dispatch, time]);



  if (error) {
    return error.message;
  }

  return (
    <Stack flexDirection={'column'} className='Home'>

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
                // borderRadius: '100%',
                width: '45px',
                height: '45px',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                margin: '5px'
              }}
                aria-label="recipe">
              </Avatar>
              <Typography>
                {user.name}
              </Typography>
              <Typography>
                {user.headline}
              </Typography>
              <Divider sx={{ width: '100%', m: '8px 0 8px 0' }} />

              <Box className={"profileCounts"}>
                <Box className={"profileCount"}>
                  <Typography className={"profileCountText"}>
                    Profile Viewers
                  </Typography>
                  <Typography className={"profileCountNumber"}>0</Typography>
                </Box>
                <Box className={"profileCount"}>
                  <Typography className={"profileCountText"}>
                    Post impressions
                  </Typography>
                  <Typography className={"profileCountNumber"}>0</Typography>
                </Box>
              </Box>

              <Box className={"offerSection"}>
                <Typography className={"offerSectionText"}>
                  Strengthen your profile with an AI writing assistant
                </Typography>
                <Typography className={"offerSectionBtn"}>
                  Reactivate Premium: 50% Off
                </Typography>
              </Box>

              <Box display={'flex'} p={1} pl={4} justifyContent={'flex-start'} width={"100%"} gap={"6px"} alignItems={'center'} >
                <TurnedInOutlinedIcon sx={{ color: '#666767', width: "20px" }} />
                <Typography className={"offerSectionText"} sx={{ fontWeight: '600' }} >Saved Items</Typography>
              </Box>

            </Stack>

            <Box className={"discoverTab"}>
              <Typography className={"offerSectionBtn"} ml={1.5} mb={2} >Recent</Typography>
              <Typography className={"discoverTabBtn"}>Groups</Typography>
              <Typography className={"discoverTabBtn"}>
                Events
              </Typography>
              <Typography className={"discoverTabBtn"}>
                Followed Hashtags
              </Typography>
              <Divider />
              <Button className={"discoverBtn"}>Discover more</Button>
            </Box>


          </Stack>

          <Stack>
            {/* <Stack className='AddPost'>
              <Stack flexDirection={'row'} gap={1}>
                <Avatar sx={{
                  border: '1px solid #d7d8d6',
                  borderRadius: '100%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '5px'
                }} aria-label="recipe">
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
                    '&:hover': { background: 'rgb(0,0,0,0.1)' }
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
                      background: 'none',
                      color: 'rgb(0,0,0,0.6)',
                      textTransform: 'none',
                      '&:hover': { background: 'none' }
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
            </Stack> */}

            <Box className={"createPostWrap"}>
              <Box className={"createPost"}>
                <Box className={"createPostWrapHead"}>
                  <Avatar
                    className={"createPostAvatar"}
                  // onClick={() => { navigate('/in') }}
                  // src={
                  //   user?.image
                  //     ? `${process.env.REACT_APP_IMG_BASE_URL}/${user.image}`
                  //     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbi0Cq6ANBTGJwu8uGYunx3XKWJJW38NECclo4Iidgg&s"
                  // }
                  />
                  <Box
                    onClick={handleClickOpen}
                    className={"createPostWrapHeadInput"}
                  >
                    Start a post
                  </Box>
                  {open && <CreatePost open={open} setOpen={setOpen} />}
                </Box>
                <Box className={"createPostWrapBody"}>
                  <ButtonGroup
                    className={"createPostWrapBodyBtns"}
                    variant="text"
                  >
                    <Button className={"createPostWrapBodyBtn"}>
                      <PhotoSizeSelectActualRoundedIcon
                        sx={{ color: "#378fe9", height: "20px" }}
                      />
                      &nbsp; Media
                    </Button>
                    <Button className={"createPostWrapBodyBtn"}>
                      <CalendarMonthRoundedIcon
                        sx={{ color: "#c37d16", height: "20px" }}
                      />
                      &nbsp; Event
                    </Button>
                    <Button className={"createPostWrapBodyBtn"} >
                      <NewspaperRoundedIcon
                        sx={{ color: "#e06847", height: "20px" }}
                      />
                      &nbsp; Write article
                    </Button>
                  </ButtonGroup>
                </Box>

              </Box>
            </Box>


            <Divider sx={{ mt: 2 }} /> 
            {

            }
            {posts && posts.length > 0 && posts?.map((items) => (
              
                <Stack className='display-posts' key={items._id}>
                  {loading ? <>Loading...</> :
                  <PostCard post={items} />
                }</Stack>
            ))}

          </Stack>
          <Stack>

            <Box className='home-news-section'>
              <News />
            </Box>
            <FooterPanel width={"300px"} />
          </Stack>

        </Stack>
      </Box>
      {/* <Box ref={bottom} /> */}
    </Stack>
  )
}

export default Home

