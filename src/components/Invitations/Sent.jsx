import { Avatar, Button, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { requestSent } from '../../redux/slice/connections/connectionAction'
import { useDispatch, useSelector } from 'react-redux'

const Sent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestSent())
  }, [dispatch])

  const sent = useSelector((state) => state?.connections?.content)
  console.log(sent?.response)

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column' }} >
      {
        sent?.response?.map((i) => {
          return (
            <>
            
            <Stack sx={{ marginTop: '20px', width: '100%' }} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} key={i._id}>
                <Stack flexDirection={'row'} sx={{ width: '70%' }} >
                <Avatar sx={{ width: '60px', height: '60px' }}></Avatar>
                <Stack flexDirection={'column'} sx={{ marginLeft: '20px' }}>
                 <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>{i?.connectionTo?.name}</Typography> 
                 <Typography sx={{ fontWeight: '400', fontSize: '14px' }}>{i?.connectionTo?.headline}</Typography> 
                 {/* <Typography>{i?.connectionTo?.company?.name}</Typography>  */}
                 
                  </Stack>
                  </Stack>
                  <Stack flexDirection={'row'} sx={{ width: '15%' }} alignItems={"center"}>
                  <Button sx={{ padding: '0', margin: '10px', color: '#525353', textTransform: 'none' }}>Withdraw</Button>
                  
                </Stack>
                
            </Stack>
            <Divider sx={{marginTop: '15px'}} />
            </>
          )
        })
      }

    </Stack>
  )
}

export default Sent
