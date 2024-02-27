import { 
    Box, 
    Button, 
    Stack, 
    Typography, 
  } from '@mui/material'
import React from 'react'
import './MyNetwork.css'
import Navbar from '../../components/Navbar/Navbar'
import NetworkPageList from '../../components/NetworkPageList/NetworkPageList'
import { useNavigate } from 'react-router-dom'


const MyNetwork = () => {

  const navigate = useNavigate()

  return (
    <Box>
      <Box className='home-nav'>
        <Navbar />
      </Box>
      <Stack 
        flexDirection={'row'} 
        justifyContent={'center'}
        gap={3}
        sx={{
          marginTop: '30px'
        }}
      >
        <Box className="manage-network-card">
          <Typography>Manage my network</Typography>
          <NetworkPageList />
        </Box>
        <Stack>
          <Box className="manage-invitations-card">
            <Typography>Invitations</Typography>
            <Button className='manage-btn' onClick={() => navigate('/mynetwork/manage')}>Manage</Button>
          </Box>
          <Box className="manage-suggestions-card">
            
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default MyNetwork
