import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../redux/slice/user/userAction'
const Profile = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

    const user = useSelector((state) => state.user.content)
    console.log(user)

  return (
    <Box className='profile-page'>
      <Box className='home-nav'>
        <Navbar />
      </Box>

      <Stack 
      justifyContent={'center'} 
      flexDirection={'row'}
      gap={3}
      marginTop={'20px'}
      > 
        
        <Stack>
            <Box className='main-profile'>
                <Stack>
                <img alt='banner' />
                <img alt='profile-image' />
                </Stack>
                <Box>
                    <Typography>{user?.name}</Typography>
                    <Typography>{user?.company?.designation}</Typography>
                    <Typography>{user?.address?.city}</Typography>
                </Box>
            </Box>
        </Stack>

        <Stack>
            <Box className='profile-language'>
                 <Typography>Profile language</Typography>
            </Box>
            <Box>

            </Box>
            <Box>

            </Box>
            <Box>

            </Box>
        </Stack>



      </Stack>
    </Box>
  )
}

export default Profile
