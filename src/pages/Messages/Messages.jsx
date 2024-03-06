import { Avatar, Box, Button, Divider, InputAdornment, InputBase, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import './Messages.css'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'

import MessageList from '../../components/MessageList/MessageList';
import MessageData from '../../components/MessageData/MessageData';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../../redux/slice/messages/messageAction';


const Messages = ({socket}) => {
  const dispatch = useDispatch()
  const [roomId, setRoomId] = useState('')
  const [reciever, setReciever] = useState({})

  const handleReciever = async (data, id) => {
    console.log(data)
    setRoomId(id)
    setReciever(data)
 }
 
const handleMessages = async (roomId) => {
  console.log(roomId)
  await dispatch(fetchMessages(roomId))
} 

const allMessages = useSelector((state) => state?.message?.content)
const loading = useSelector((state) => state?.message?.isLoading)
const error = useSelector((state) => state?.message?.error)

console.log(allMessages)
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

        <MessageList handleReciever={handleReciever} handleMessages={handleMessages} />
        <Divider orientation='vertical'/>
        <MessageData reciever={reciever} roomId={roomId} allMessages={allMessages} loading={loading} socket={socket} /> 
       
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
