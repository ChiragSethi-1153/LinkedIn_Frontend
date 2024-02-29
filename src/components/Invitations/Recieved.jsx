import { Avatar, Box, Button, Divider, List, ListItem, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestRecieved } from '../../redux/slice/connections/connectionAction'

const Recieved = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestRecieved())
  }, [dispatch])

  const requests = useSelector((state) => state?.connections?.content)
  console.log(requests?.response)

  const handleAccept = () => {
    
  }

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column' }} >
      {
        requests?.response && requests?.response.length !== 0 ?
          requests?.response?.map((i) => {
            return (
              <>
              <Stack sx={{ marginTop: '20px', width: '100%' }} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} key={i._id}>
                <Stack flexDirection={'row'} sx={{ width: '70%' }} >
                  <Avatar sx={{ width: '60px', height: '60px' }}></Avatar>
                  <Stack flexDirection={'column'} sx={{ marginLeft: '20px' }}>
                    <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>{i?.connectionBy?.name}</Typography>
                    <Typography sx={{ fontWeight: '400', fontSize: '14px' }}>{i?.connectionBy?.headline}</Typography>
                    {/* <Typography>{i?.connectionBy?.company?.name}</Typography> */}
                    <Button sx={{ padding: '0', marginTop: '10px', textTransform: 'none' }}>Message</Button>
                  </Stack>
                </Stack>
                <Stack flexDirection={'row'} sx={{ width: '30%' }} alignItems={"center"}>
                  <Button sx={{ padding: '0', margin: '10px', color: '#525353', textTransform: 'none' }}>Ignore</Button>
                  <Button variant='outlined'
                    sx={{ padding: '5px 25px', margin: '10px', borderRadius: '50px', textTransform: 'none', fontWeight: '500' }}

                  >Accept</Button>
                </Stack>
              
              </Stack>
              <Divider sx={{marginTop: '15px'}} />
            </>
            )

          }

          ) : "No new Requests received"
      }

    </Stack>
  )
}

export default Recieved
