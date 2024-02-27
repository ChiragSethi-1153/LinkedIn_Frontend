import React, { useState } from 'react'
import './ManageRequest.css'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'
import Recieved from '../../components/Invitations/Recieved'
import Sent from '../../components/Invitations/Sent'


const ManageRequest = () => {

    const [response, setResponse] = useState(true)
    
    return (
        <Box>
            <Box className="home-nav">
                <Navbar />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '25px'}}>

                <Box className='invitation-box'>
                    <Stack>
                    <Typography sx={{marginBottom: '10px'}}>Manage Invitations</Typography>
                    <Stack flexDirection={'row'} justifyContent={'flex-start'} gap={2} sx={{paddingBottom: '5px'}}>
                        <Button 
                        sx={{
                            padding: '0', 
                            color: "#02754f", 
                            textTransform: 'none',
                            "&active": {
                                textDecoration: "underline" 
                            }
                            }}
                        onClick={() => {setResponse(true)}}
                            >Recieved</Button>
                        <Button
                        sx={{
                            padding: '0', 
                            color: "#02754f", 
                            textTransform: 'none',
                            "&active": {
                                textDecoration: "underline" 
                            }
                            }}
                            onClick={() => {setResponse(false)}}
                            >Sent</Button>
                    </Stack>
                    <Divider />
                    {response ? <Recieved /> : <Sent /> }
               
                    </Stack>

                </Box>

            </Box>

        </Box>
    )
}

export default ManageRequest
