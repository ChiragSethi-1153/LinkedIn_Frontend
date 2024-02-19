import React, { useState } from 'react'
import './Navbar.css'
import { AppBar, Box, Button, InputAdornment, Stack, TextField } from '@mui/material'
import {ReactComponent as LinkedInIcon} from '../../assets/icons-linkedin.svg'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '../../assets/home-icon.svg'
import HomeIcon2 from '../../assets/home-icon2.svg'
import {ReactComponent as NetworkIcon} from '../../assets/network-icons.svg'
import {ReactComponent as JobIcon} from '../../assets/jobs-icon.svg'
import {ReactComponent as MessageIcon} from '../../assets/message-icon.svg'
import {ReactComponent as NotificationIcon} from '../../assets/notification-icon.svg'
import {ReactComponent as BusinessIcon} from '../../assets/business-icon.svg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [isActive, setIsActive] = useState(0)
  const [index, setIndex] = useState(0);
  
  function getImage() {
    if(index === 0){
      return <img src={HomeIcon} alt="Home" style={{width: '20px'}} />;
    }
    else if(index === 1){
      return <img src={HomeIcon2} alt="Home" style={{width: '20px'}} />;
    }
  }

  return (
    <AppBar className='navbar'>
        <Stack
        flexDirection={'row'}
        justifyContent={'center'}
        className='navbar-items'
        >
          <LinkedInIcon  />
          <TextField className='search-bar'
          placeholder='Search'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <SearchIcon style={{color: 'black'}} />
              </InputAdornment>
            ),
          }}
          />

          <Stack
            flexDirection={'row'}
          >
          <Button  onClick={() => {
            setIndex(1)
            
            }}>{
              getImage()
            }</Button>
         
          <Button ><NetworkIcon /></Button>
          <Button ><JobIcon /></Button>
          <Button ><MessageIcon /></Button>
          <Button ><NotificationIcon /></Button>
          </Stack>

          <Box sx={{ display: "flex", gap: "20px" }}>
        <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>
          <BusinessIcon />
          <h4 >For Business</h4>
        </li>
        <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>
          <NavLink className="premium" to="" >Network smarter <br /> with Primium</NavLink>
        </li>
      </Box>

        </Stack>
    </AppBar>
  )
}

export default Navbar
