import { Button, Divider, InputBase, Stack, Typography } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import PhotoIcon from '@mui/icons-material/Photo';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const MessageData = () => {
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
          Naam
          </Typography>

            <Stack flexDirection={'row'} gap={2}>
              <MoreHorizIcon />
              <VideoCallIcon />
              <StarBorderRoundedIcon />
            </Stack>

            </Stack>
            <Divider />
            <Stack sx={{height: '55vh'}}>

            </Stack>
            <Divider />
            <Stack className='textField' sx={{boxSizing: 'border-box', padding: '10px', height: '121px'}}>
              <InputBase
              multiline
              minRows={4}
              placeholder='Write a message...'
              sx={{
                backgroundColor: '#f5f3ee', 
                borderRadius: '5px', 
                boxSizing: 'border-box', 
                padding: '30px 10px 10px 10px',
                fontSize: '14px',
                height: '100%',
                overflow: 'scroll',
                WebkitOverflowScrolling: 'auto'
                }}
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
                sx={{textTransform: 'none', borderRadius:'50px', padding: '0'}}>
                  Send
                </Button>
                <MoreHorizIcon />
              </Stack>
              </Stack>
        
        
        
         </Stack>
  )
}

export default MessageData
