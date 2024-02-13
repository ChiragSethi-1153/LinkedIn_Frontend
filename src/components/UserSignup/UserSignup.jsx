import React from 'react'
import Logo from '../../assets/Linkedin-logo.jpg'
import './UserSignup.css'
import {Button, capitalize} from '@mui/material'

const UserSignup = () => {
  return (
    <div className='usersignup'>
      <div className='logo'>
        <img src={Logo} alt='LinkedIn' style={{width: "150px"}} />
      </div>
        <div className='signup-form-div'>
            <h1 className='signup-title'>Make the most of your professional life</h1>
            <form className='signup-form'>
            <div className='signup-inputs'>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' />
                <br />
                <label htmlFor='password'>Password (6+ characters)</label>
                <input type='text' name='password'/>
            </div>
                <p>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
                <Button variant='contained' style={{textTransform: 'capitalize', borderRadius: '30px'}} >Agree & Join</Button>
                <p>Already on LinkedIn? <span>Sign In</span></p>
            </form>
        </div>

    </div>
  )
}

export default UserSignup
