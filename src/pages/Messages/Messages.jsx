import { Avatar, Box, Button, Divider, InputAdornment, InputBase, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import './Messages.css'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'

import MessageList from '../../components/MessageList/MessageList';
import MessageData from '../../components/MessageData/MessageData';


const Messages = ({socket}) => {

  const [reciever, setReciever] = useState({})

  const handleReciever = (data) => {
    console.log(data)
    setReciever(data)
 }
 
  return (
    <Box>
      <Box className="home-nav"><Navbar /></Box>

      <Stack
        flexDirection={'row'}
        justifyContent={'center'}
        gap={3}
        sx={{ marginTop: '20px'}}
      >

        <Box className="main-message-box" sx={{display: 'flex', flexDirection: 'row'}}>

        <MessageList handleReciever={handleReciever} />
        <Divider orientation='vertical'/>
        <MessageData reciever={reciever} socket={socket} /> 
       
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
