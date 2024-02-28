import { Avatar, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { requestSent } from '../../redux/slice/connections/connectionAction'
import { useDispatch, useSelector } from 'react-redux'

const Sent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestSent())
  }, [dispatch])

  const requests = useSelector((state) => state?.connections?.content)
  console.log(requests?.response)

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column' }} >
      {
        requests?.response?.map((i) => {
          return (
            <Stack sx={{marginTop: '5px'}} flexDirection={'row'} key={i._id}>
                <Avatar></Avatar>
                <Stack flexDirection={'column'}>
                 <Typography>{i?.connectionTo?.name}</Typography> 
                 <Typography>{i?.connectionTo?.headline}</Typography> 
                 <Typography>{i?.connectionTo?.company?.name}</Typography> 

                  </Stack>
            </Stack>
          )
        })
      }

    </Stack>
  )
}

export default Sent
