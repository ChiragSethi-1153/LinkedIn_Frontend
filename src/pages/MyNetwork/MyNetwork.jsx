import { 
  Avatar,
    Box, 
    Button, 
    Card, 
    CardContent, 
    Stack, 
    Typography, 
  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './MyNetwork.css'
import Navbar from '../../components/Navbar/Navbar'
import NetworkPageList from '../../components/NetworkPageList/NetworkPageList'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import SuggestionCard from '../../components/SuggestionCard/SuggestionCard'
import { requestSuggestions } from '../../redux/slice/connections/connectionAction'

const MyNetwork = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  

  useEffect(() => {
    dispatch(requestSuggestions())
  }, [dispatch])

  const suggestions = useSelector((state) => state.connections.content)
  const loading = useSelector((state) => state.connections.isLoading)
  const error = useSelector((state) => state.connections.error)

  console.log(suggestions)

  if (loading) {
    return "Loading..."
  }
  if (error) {
    return error
  }

  

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
        <Stack gap={2}>
          <Box className="manage-invitations-card">
            <Typography>Invitations</Typography>
            <Button className='manage-btn' onClick={() => navigate('/mynetwork/manage')}>Manage</Button>
          </Box>



          <Stack className="manage-suggestions-card">
            <Typography>People you may know</Typography>

          <Box className="display-suggestion-cards">
          {
          suggestions && 
              suggestions?.map((item) => {
                return(
                  <SuggestionCard  item={item} />
                )
              })
              // : "No Suggestion for you"
            }
          </Box>
            
            
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default MyNetwork
