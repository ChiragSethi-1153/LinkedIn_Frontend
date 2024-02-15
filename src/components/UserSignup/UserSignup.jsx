import React, { useState, useEffect } from 'react'
import Logo from '../../assets/Linkedin-logo.png'
import './UserSignup.css'
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Stack, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
import { registerUsers } from '../../redux/slice/userSlice'

const UserSignup = () => {
  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // const [inputs, setInputs] = useState({ email: '', password: '' })

  // useEffect(() => {
  //   dispatch(registerUsers())
  // }, [dispatch])

  // const users = useSelector((state) => state.user.content)
  // const loading = useSelector((state) => state.user.isLoading)
  // const error = useSelector((state) => state.user.error)

  // if (loading) {
  //   return "Loading..."
  // }
  // if (error) {
  //   return error
  // }


  return (
    <div className='signup-Page'>
      <main className='signup-main'>
        <header className='signup-header'>
          <div className='signup-page-logo'>
            <span>
              <img src={Logo} alt='Logo' className='signup-logo' />
            </span>
          </div>
          <h1 className='signup-title'>
            Make the most of your professional life
          </h1>
        </header>

        <div className='signup-form-wrapper'>

          <form className='signup-form'>
            <section className='signup-form-section'>

             

{/*                 
                <input type='email' name='email' />

                
                <input type='text' name='password' /> */}

                <Stack spacing={3}>
                <div className='signup-inputs'>
                  <label htmlFor='email'>Email</label>
                  <TextField 
                  name='email' 
                  className='email' 
                  inputProps={{style: {height: '3px', borderWidth: '1px', padding: '14px 16px 14px 16px'}}}
                  required />
                  <br />
                  <label htmlFor='password'>Password (6+ characters)</label>
                  <TextField  name='password' className='password'  inputProps={{style: {height: '3px', borderWidth: '1px', padding: '14px 16px 14px 16px'}}} required />
                  </div>
                  <p>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
                  <Button variant='contained' style={{ textTransform: 'capitalize', borderRadius: '30px' }} >Agree & Join</Button>
                </Stack>

                {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? "Hide" : "Show"}
                </IconButton>
              </InputAdornment>
            }
          />
             </FormControl> */}

       

             

            </section>

          </form>
          <p>Already on LinkedIn? <span>Sign In</span></p>
        </div>



        
      </main>

      <Footer />

    </div>
  )
}

export default UserSignup
