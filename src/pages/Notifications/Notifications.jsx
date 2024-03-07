import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {ReactComponent as OptionIcon} from '../../assets/optionIcon.svg'
const Notifications = () => {
    return (
        <Box>
            <Box className="home-nav"><Navbar /></Box>

            <Stack flexDirection={'row'}
                justifyContent={'center'}
                gap={3}
                sx={{ marginTop: '20px' }}>


                <Box
                    sx={{
                        backgroundColor: '#fff',
                        width: '227px', height: '110px', boxSizing: 'border-box', border: '1px solid #d7d8d6',
                        borderRadius: '10px',
                        padding: '16px 16px'
                    }}
                >
                    <Typography sx={{ fontWeight: '600' }}>Manage your Notifications</Typography>
                    <Typography 
                        sx={{ 
                            fontWeight: '600',
                            fontSize:'14px', 
                            color: '#3b7bcb', 
                            marginTop: '8px',
                            "&:hover": {
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }    
                        }}
                    >View Settings</Typography>
                </Box>

                <Stack gap={1} >
                    <Box sx={{
                        backgroundColor: '#fff',
                        width: '557px', height: '66px', boxSizing: 'border-box', border: '1px solid #d7d8d6',
                        borderRadius: '10px',
                        padding: '16px 16px'
                    }}
                    >
                        <Stack flexDirection={'row'} gap={1} sx={{width: '100%'}}>
                            <Button variant='contained'
                            sx={{
                                boxShadow: 'none',
                                padding: '0',
                                borderRadius: '50px',
                                width: '43px',
                                minWidth: '0',
                                backgroundColor: '#02744e'

                            }}
                            >All</Button>
                             <Button variant='contained'
                            sx={{
                                boxShadow: 'none',
                                padding: '0',
                                borderRadius: '50px',
                                width: '90px',
                                minWidth: '0',
                                boxSizing: 'border-box',
                                backgroundColor: '#02744e'

                            }}
                            >My Posts</Button>
                             <Button variant='contained'
                            sx={{
                                boxShadow: 'none',
                                padding: '0',
                                borderRadius: '50px',
                                width: '90px',
                                minWidth: '0',
                                boxSizing: 'border-box',
                                backgroundColor: '#02744e'
                                
                            }}
                            >Mentions</Button>
                        </Stack>
                    </Box>
                    <Stack sx={{
                        backgroundColor: '#fff',
                        width: '557px', height: 'fit-content', boxSizing: 'border-box', border: '1px solid #d7d8d6',
                        borderRadius: '10px',
                        padding: '16px 16px'}}
                    >
                        {/* Map */}
                        <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            <Stack flexDirection={'row'}>
                            <Avatar></Avatar>
                            <Typography sx={{marginLeft: '10px'}}>Notification</Typography>
                            </Stack>
                            <OptionIcon />
                        </Stack>
                        

                    </Stack>
                </Stack>
            </Stack>


        </Box>
    )
}

export default Notifications
