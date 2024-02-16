import React, { useState, useEffect } from 'react'
import Logo from '../../assets/Linkedin-logo.png'
import './UserSignup.css'
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
import { registerUsers } from '../../redux/slice/userSlice'
import {ReactComponent as GoogleIcon} from '../../assets/icons-google.svg'
import { useNavigate } from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover'
const UserSignup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate(0)
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  const [inputs, setInputs] = useState({ email: '', password: '' })

  useEffect(() => {
    dispatch(registerUsers(inputs))
  }, [dispatch])

  const users = useSelector((state) => state.user.content)
  const loading = useSelector((state) => state.user.isLoading)
  const error = useSelector((state) => state.user.error)

  if (loading) {
    return "Loading..."
  }
  if (error) {
    return error
  }


  return (
    <Box className='signup-Page'>
      <main className='signup-main'>
        <header className='signup-header'>
          <Box className='signup-page-logo-div'>
          
          <img src={Logo} alt='Logo' className='signup-logo' />
      
          </Box>
          <h1 className='signup-title'>
            Make the most of your professional life
          </h1>
        </header>

        <Box className='signup-form-wrapper'>

          <form className='signup-form'>
            <section className='signup-form-section'>

              <Box className='signup-inputs'>
                <label htmlFor='email'>Email</label>
                <TextField
                  name='email'
                  className='email'
                  inputProps={{ style: { height: '3px', padding: '14px 16px 14px 16px' } }}
                  sx={{
                    border: '1px solid black',
                    outline: 'none',
                    '&.Mui-focused fieldset': {
                      border: "none",
                  }
                  }}
                  required />
                <br />
                <label htmlFor='password'>Password (6+ characters)</label>
                <OutlinedInput
                  // id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  inputProps={{ style: { height: '3px', borderWidth: '1px', padding: '14px 16px 14px 16px' } }}
                  sx={{
                    paddingRight: '0',  
                  }}
                  endAdornment={
                    <InputAdornment position="end" >
                      <Button
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{
                          textTransform: 'none', 
                          fontSize: '16px',
                          fontWeight: 500,
                          fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                          
                            '&:hover': {background: 'none', border: 'none'}
                        }}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputAdornment>
                  }
                />

              </Box>
              <p className='signup-text'>By clicking Agree & Join or Continue, you agree to the LinkedIn <span className='signup-text-span'>User Agreement</span>, <span className='signup-text-span'>Privacy Policy</span>, and <span className='signup-text-span'>Cookie Policy</span>.</p>
              <Button
                variant='contained'
                style={{
                  textTransform: 'capitalize',
                  width: '100%',
                  boxShadow: 'none',
                  height: 'min-content',
                  minHeight: '48px',
                  borderRadius: '28px',
                  padding: '10px 24px 10px 24px',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 500,
                  fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                  backgroundColor: '#0a66c2'
                }} >
                Agree & Join
              </Button>
            
                
            <Box className='form-divider'>
                <span><span className='divider-line'></span></span>
                <span className='divider-text-content'><span className='divider-text'>or</span></span>
               

            </Box>
            <Box className='third-party-container'>

              <Button 
                variant='outlined' 
                startIcon={<GoogleIcon style={{width: '21px', height: '21px', minWidth: '18px'}} />}
                className='google-btn'
                >Continue with Google</Button>
            </Box>
              <Box className='form-footer'>
              <p className='form-footer-text'>Already on LinkedIn? <span className='footer-signin-link' onClick={() => navigate('/login')}> Sign In </span></p>
              </Box>
            </section>
            
          </form>
        <Box className='help-link'>
        <p>Looking to create a page for a business? <span className='footer-signin-link'>Get help</span></p> 
        </Box>
          
        
        </Box>




      </main>

      <Footer />

    </Box>
  )
}

export default UserSignup
