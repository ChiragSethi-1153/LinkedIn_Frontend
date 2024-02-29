import { Avatar, Box, Button, Divider, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import './Messages.css'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';

const Messages = () => {
  return (
    <Box>
      <Box className="home-nav"><Navbar /></Box>

      <Stack
        flexDirection={'row'}
        justifyContent={'center'}
        gap={3}
        sx={{ marginTop: '20px' }}
      >

        <Box className="main-message-box" sx={{display: 'flex', flexDirection: 'row'}}>

        <Stack className='messaging-box'>
          <Stack 
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            >
            <Typography
            
            sx={{
              fontSize: '18px', 
              fontWeight: '500',
              marginBottom: '8px'
            }}
            >Messaging</Typography>
            <Button 

            ><MoreHorizIcon /></Button>
          </Stack>
          <Divider />
          <Stack sx={{width: '100%', marginTop:'10px'}}>
          <TextField className='search-bar'
          placeholder='Search messages' 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <SearchIcon style={{color: 'black'}} />
              </InputAdornment>
            ),
          }}
          />
          <Stack flexDirection={'row'} sx={{width: '100%', marginTop:'10px'}}> 
            <Button sx={{
              textTransform: 'none',
              color: '#599d83',
              width: '50%',
              fontWeight: '700',
              

            }}>Focused</Button>
            <Button
            sx={{
              textTransform: 'none',
              color: '#7f7f7f',
              width: '50%',
              fontWeight: '700'
            }}
            >Other</Button>
          </Stack>
          </Stack>
          <Divider />
      
            {/* map */}
         
            
            <Stack sx={{ marginTop: '20px', width: '100%' }} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack flexDirection={'row'} sx={{ width: '70%' }} >
                <Avatar sx={{ width: '60px', height: '60px' }}></Avatar>
                <Stack flexDirection={'column'} sx={{ marginLeft: '20px' }}>
                 <Typography sx={{ fontWeight: '500', fontSize: '20px' }}></Typography> 
                 <Typography sx={{ fontWeight: '400', fontSize: '14px' }}></Typography> 
                  </Stack>
                  </Stack>
                  <Stack flexDirection={'row'} sx={{ width: '15%' }} alignItems={"center"}>
                </Stack>
                
            </Stack>
            <Divider sx={{marginTop: '15px'}} />

        
        </Stack>
        <Divider orientation='vertical'/>
         <Stack className='user-message-box'></Stack>
          <Typography 
            sx={{
              fontSize: '16px', 
              fontWeight: '500',
              marginBottom: '8px'
            }}
          ></Typography>
        </Box>

        

        <Box className="messages-side-box">
          <Typography
          sx={{
            fontSize: '18px', 
            fontWeight: '500',
            marginBottom: '8px'
          }}

          >Grow Your Network with Premium</Typography>

          <Typography
          sx={{
            marginBottom: '8px'
          }}
          >
            Premium InMail is 4.6x more effective in hearing back than cold email.
          </Typography>
          <Button variant='contained'
          sx={{
            boxShadow: 'none',
            borderRadius: '50px',
            color: 'black',
            backgroundColor: '#f8c882',
            textTransform: 'none',
            fontWeight: '500',
            padding: '3px 15px',
            fontSize: '18px'
          }}
          
          >Try Premium for free</Button>
        </Box>


      </Stack>

    </Box>
  )
}

export default Messages
