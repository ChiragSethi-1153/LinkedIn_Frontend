import React, { useState } from 'react'
import Logo from '../../assets/Linkedin-logo.png'
import './UserSignup.css'
import { Box, Button, InputAdornment,  OutlinedInput, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import Footer from '../../components/Footer/Footer'

import {ReactComponent as GoogleIcon} from '../../assets/icons-google.svg'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import { registerUsers } from '../../redux/slice/signup/signupAction'

const UserSignup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  
  const [inputs, setInputs] = useState({name:'', email: '', password: '' })
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [navigation, setNavigation] = useState(true)

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("");
      setNavigation(true)
    } else {
      setErrorMessage("Is Not Strong Password");
      setNavigation(false)
    }
  };

const handleEmail = (e) => {
  setInputs({...inputs, email: e.target.value})
  let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(e.target.value)) {
      setEmailErrorMsg("Please enter a valid email address.");
      setNavigation(false)
    } else {
      setEmailErrorMsg("");
      setNavigation(true)
    }
}
const handlePassword = (e) => {
  setInputs({...inputs, password: e.target.value})
}

  const handleSubmit = (e) => {
    e.preventDefault()
   if(navigation === false){
      alert('Kindly enter Correct Credentials')
   }
   else{
    console.log(inputs)
    dispatch(registerUsers(inputs))
    navigate('/login')
   }
    
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

          <form className='signup-form'  onSubmit={(e) => {handleSubmit(e)}}>
            <section className='signup-form-section'>

              <Box className='signup-inputs'>
                <label htmlFor='name'>Name</label>
                <TextField
                  name='name'
                  className='email'
                  inputProps={{ style: { height: '3px', padding: '14px 16px 14px 16px' } }}
                  sx={{
                    border: '1px solid black',
                    mb: 2,
                    outline: 'none',
                    '&.Mui-focused fieldset': {
                      border: "none",
                      outline: 'none',
                  }
                  }}
                  value={inputs.name}
                  onChange={(e) => setInputs({...inputs, name: e.target.value})}
                  required />
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
                      outline: 'none',
                  }
                  }}
                  value={inputs.email}
                  onChange={(e) => {handleEmail(e)}}
                  required />
                  <Typography style={{ color: "red" }}> {emailErrorMsg}</Typography>
                <br />
                <label htmlFor='password'>Password (6+ characters)</label>
                <OutlinedInput
                  // id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  inputProps={{ style: { height: '3px', borderWidth: '1px', padding: '14px 16px 14px 16px' } }}
                  sx={{
                    paddingRight: '0',
                    border: '1px solid black',
                    outline: 'none',
                    '&.Mui-focused fieldset': {
                      border: "none",
                      outline: 'none',
                  }  
                  }}
                  value={inputs.password}
                  onChange={(e) => {
                    handlePassword(e)
                    validate(e.target.value)
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
                 <Typography paragraph='true'>
              {errorMessage === "" ? null : (
                <span
                  style={{
                    fontWeight: "normal",
                    color: "red",
                  }}
                >
                  {errorMessage}
                </span>
              )}
            </Typography>

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
                }} 
                type='submit'
               
                >
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
