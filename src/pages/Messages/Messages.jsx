import { Avatar, Box, Button, Divider, InputAdornment, InputBase, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import './Messages.css'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import PhotoIcon from '@mui/icons-material/Photo';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
const Messages = () => {
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

        <Stack className='messaging-box'  sx={{width: '312px'}}>
          <Stack 
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{width: '100%', padding: '5px 0px 5px 0px'}}
            >
            <Typography
            
            sx={{
              fontSize: '16px', 
              fontWeight: '500',
              margin: '0',
              paddingLeft: '18px'
            }}
            >Messaging</Typography>
            <Button><MoreHorizIcon sx={{color: '#000000'}} /></Button>
          </Stack>
          <Divider />


          <Stack sx={{width: '100%', marginTop:'10px', padding: '0', border: 'box'}} alignItems={'center'}>

          <InputBase 
          startAdornment={<SearchIcon sx={{color: 'black', paddingLeft: '10px', paddingRight: '8px'}} />}
          endAdornment={<TuneIcon sx={{color: 'black', paddingLeft: '10px', paddingRight: '8px'}} />}
          placeholder="Search messages"
          sx={{ 
            border: '1px Solid #edf2f9', 
            borderRadius: '4px', 
            width: '88%',
            fontSize: '14px',
            fontWeight: '400',
            color: 'black',
            backgroundColor: '#edf2f9',
            "&:hover" : {
              border: '1px solid black',
            },
            "&:focus" : {
              border: '1px solid black',
            },
            
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
      
            <Stack sx={{ width: '100%', height: '100%', overflow: 'scroll' }}>
              {/* map */}
         
            
            <Stack sx={{ width: '100%', height: '91px'}} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                
                <Button sx={{padding: '15px ', width: '100%',height: '100%', textTransform: 'none', color: 'black'}}>
                  <Stack flexDirection={'row'} sx={{ width: '100%' }}>
                  <Avatar sx={{ width: '60px', height: '60px' }}></Avatar>
                  <Stack flexDirection={'column'} sx={{ marginLeft: '10px', width: '100%' }} alignItems={'flex-start'}>
                  <Stack flexDirection={"row"} alignItems={'center'} justifyContent={'space-between'} sx={{width: '100%'}}>
                  <Typography sx={{ fontWeight: '400', fontSize: '18px' }}>Naam</Typography> 
                  <Typography>Date</Typography>
                  </Stack>
                  <Typography sx={{ fontWeight: '400', fontSize: '14px' }}>Naam: Last Msg</Typography> 
                  </Stack>
                  </Stack>
                </Button>         
            </Stack>
            <Divider  />
            <Stack sx={{ width: '100%', height: '91px'}} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                
                <Button sx={{padding: '15px ', width: '100%',height: '100%', textTransform: 'none', color: 'black'}}>
                  <Stack flexDirection={'row'} sx={{ width: '100%' }}>
                  <Avatar sx={{ width: '60px', height: '60px' }}></Avatar>
                  <Stack flexDirection={'column'} sx={{ marginLeft: '10px', width: '100%' }} alignItems={'flex-start'}>
                  <Stack flexDirection={"row"} alignItems={'center'} justifyContent={'space-between'} sx={{width: '100%'}}>
                  <Typography sx={{ fontWeight: '400', fontSize: '18px' }}>Naam</Typography> 
                  <Typography>Date</Typography>
                  </Stack>
                  <Typography sx={{ fontWeight: '400', fontSize: '14px' }}>Naam: Last Msg</Typography> 
                  </Stack>
                  </Stack>
                </Button>         
            </Stack>
            <Divider  />
            
            


            </Stack>

        
        </Stack>
        <Divider orientation='vertical'/>
         
         
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
