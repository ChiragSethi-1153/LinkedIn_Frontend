import { Avatar, Box, Button, Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendRequest } from '../../redux/slice/connections/connectionAction'

const SuggestionCard = ( { item}) => {
    
    const [toggle, setToggle] = useState(true)
    // const [status]
    const dispatch = useDispatch()
    
    const handleConnect = () => {
        dispatch(sendRequest(item._id))
        setToggle(false)
    }

console.log(toggle)
  return (
    <Card 
                    
                    sx={{
                      display: "flex", 
                      flexDirection: 'column', 
                      alignItems:'center', 
                      margin: '10px auto', 
                      width: '180px', 
                      height: '230px'
                    }}>
                    <CardContent sx={{
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems:'center', 
                      justifyContent: 'space-between', 
                      width: '100%', 
                      height: '100%',
                
                      }}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                        <Avatar sx={{width: '80px', height: '80px'}}></Avatar>
                        <Typography sx={{fontSize: '18px', fontWeight: '500', marginTop: '10px'}}>{item.name ? item.name : "LinkedIn user"}</Typography>
                        <Typography>{item.headline}</Typography>
                        </Box>
                        
                      {
                      toggle ? 
                      
                      <Button variant='outlined'
                      sx={{
                        textTransform: 'None',
                        borderRadius: '50px',
                        width: '90%'
                      }}
                        onClick={() => handleConnect()}
                      >Connect</Button>
                      
                      : 
                      
                      <Button variant='outlined'
                      sx={{
                        textTransform: 'None',
                        borderRadius: '50px',
                        width: '90%',
                        color: '#414140'
                      }}
                      >Pending</Button>
                      
                      }
                      
                    </CardContent>
                  </Card>
  )
}

export default SuggestionCard
