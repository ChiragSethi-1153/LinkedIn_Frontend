import { Avatar, Box, Button, Divider, InputAdornment, InputBase, Stack, TextField, Typography } from '@mui/material'
import './Messages.css'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
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

        <Stack className='messaging-box' sx={{width: '310px'}}>
          <Stack 
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{width: '100%', padding: '10px 0px 10px 0px'}}
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
          
          
          {/* <TextField className='search-bar'
          variant='filled'
          placeholder='Search messages' 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <SearchIcon style={{color: 'black'}} />
              </InputAdornment>
            ),
            endAdornment: (
              <Button sx={{borderRadius: "50px"}}>
                <TuneIcon style={{color: 'black'}} />
              </Button>
            ),
          }}
            
          sx={{
            width: '90%',
            
            "& .MuiFilledInput-root": {
              height: '52px',
              
              border: "none",
              '&.Mui-focused fieldset': {
                  border: '1px solid black',   
                },
                '&:.MuiFilledInput-underline': {
                  
                  textUnderlineOffset: 'none'
                },
              '&:hover fieldset': {
                border: '1px solid black',
                
              },
            }
          }}
                    
          /> */}

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
            "&:active" : {
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
      
            {/* map */}
         
            
            <Stack sx={{ marginTop: '20px', width: '100%' }} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                
                <Button sx={{padding: '0', width: '100%', textTransform: 'none', color: 'black'}}>
                  <Stack flexDirection={'row'} sx={{ width: '100%' }} >
                  <Avatar sx={{ width: '60px', height: '60px' }}></Avatar>
                  <Stack flexDirection={'column'} sx={{ marginLeft: '20px' }} alignItems={'flex-start'}>
                  <Typography sx={{ fontWeight: '400', fontSize: '18px' }}>Tera Naam</Typography> 
                  <Typography sx={{ fontWeight: '400', fontSize: '14px' }}>Naam: Last Msg</Typography> 
                  </Stack>
                  </Stack>
                </Button>
                
                


                  
                
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
