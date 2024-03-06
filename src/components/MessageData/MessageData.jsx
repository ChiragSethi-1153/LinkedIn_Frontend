import { Avatar, Button, Divider, InputBase, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import PhotoIcon from '@mui/icons-material/Photo';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { fetchMessages } from '../../redux/slice/messages/messageAction';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../../redux/slice/messages/messageSlice';

const MessageData = ({reciever, roomId, socket, allMessages, loading}) => {

  const dispatch = useDispatch()
  // console.log(reciever)
  // console.log(loading)
  // console.log(allMessages)
  // console.log(roomId)
  // console.log(socket)
  const user = useSelector((state) => state?.user?.content)
  const userId = user._id

  const [message, setMessage] = useState('')

  
  useEffect(() => {
    socket.on('room')

    socket.emit("room-join",roomId);

    socket.on("message", ({content, roomId, sender}) => {
      console.log(content, " " , roomId, " ", sender,"-dkl");
      dispatch(addMessages({sender: sender, content: content, roomId: roomId}))
  })

  return ()=>{
    socket.off(roomId)
  }

  }, [])

  const handleMessage = () => {
    socket.emit("message", {
      content: message,
      roomId: roomId, 
      sender: userId    
    })
    setMessage('')
  }

  return (
    <Stack className='user-message-box' sx={{width: '468px'}}>

            <Stack className='user-name' 
            flexDirection={'row'} 
            justifyContent={'space-between'} 
            alignItems={'center'} 
            sx={{ width: '100%', boxSizing: 'border-box', padding: '8px'}}
            >
            <Typography 
            sx={{
              fontSize: '16px', 
              fontWeight: '500',
            }}
          >
          {reciever.name}
          </Typography>

            <Stack flexDirection={'row'} gap={2}>
              <MoreHorizIcon />
              <VideoCallIcon />
              <StarBorderRoundedIcon />
            </Stack>

            </Stack>
            <Divider />
            <Stack sx={{height: '58vh', overflow: "auto", overflowX: 'hidden', boxSizing: 'border-box'}}>
              <Stack sx={{width: '100%', padding: '8px'}}>

              <Avatar sx={{height: '72px', width: '72px'}}></Avatar>
              <Typography 
              sx={{ 
                fontSize: '17px', 
                fontWeight: '500',
                marginLeft: '11px',
                marginTop: '10px',
                "&:hover": {
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }
              }}>{reciever?.name}</Typography>
              <Typography
              sx={{
                fontSize: '14px',
                marginLeft: '11px',
              }}
              >{reciever?.headline}</Typography>
              </Stack>
              <Divider />
              {
                loading && <>Loading...</>
              }
              {
                allMessages && 
                allMessages.length > 0 && 
                allMessages.map((item) => {
                    return(
                      <Stack>
                        <Stack flexDirection={'row'} sx={{marginLeft: '10px', marginTop: '10px'}}>
                          <Avatar sx={{}}></Avatar>
                          <Stack sx={{marginLeft: '10px'}}>
                          <Typography sx={{fontWeight: '500'}}>{item?.sender?.name}</Typography>
                          <Typography>{item?.content}</Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    )
                })
              }
              {/* {
                recievedMessage && 
                recievedMessage.length > 0 &&
                recievedMessage.map &&
                recievedMessage.map((item) => {
                  return(
                    <Stack>
                      <Stack flexDirection={'row'} sx={{marginLeft: '10px', marginTop: '10px'}}>
                        <Avatar sx={{}}></Avatar>
                        <Stack sx={{marginLeft: '10px'}}>
                        <Typography sx={{fontWeight: '500'}}>{item?.sender?.name}</Typography>
                        <Typography>{item?.content}</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  )
                })
              } */}

            </Stack>
            <Divider />
            <Stack className='textField' sx={{boxSizing: 'border-box', padding: '10px', height: 'fit-content', overflow: 'auto'}}>
              <InputBase
              multiline
              minRows={4}
              placeholder='Write a message...'
              sx={{
                backgroundColor: '#f5f3ee', 
                borderRadius: '5px', 
                boxSizing: 'border-box', 
                padding:  "10px 5px 5px 10px",
                fontSize: '14px',
                overflowX: 'hidden'
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
               />
            </Stack>
            <Divider />

              <Stack 
                flexDirection={'row'} 
                sx={{height: '98px', boxSizing: 'border-box', padding: '20px'}}
                gap={2}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
              <Stack flexDirection={'row'}  gap={2}>
                <PhotoIcon />
                <AttachFileIcon sx={{rotate: '50deg'}} />
                <GifIcon />
                <SentimentSatisfiedAltIcon />
              </Stack>
              <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                <Button variant='contained' 
                sx={{textTransform: 'none', borderRadius:'50px', padding: '0'}}
                onClick={handleMessage}
                >
                  Send
                </Button>
                <MoreHorizIcon />
              </Stack>
              </Stack>
        
        
        
         </Stack>
  )
}

export default MessageData
