import React from 'react'
import  Logo  from '../assets/Linkedin-logo.jpg'
const UserLogin = () => {
  return (
    <div>
      <img src={Logo} alt='logo' style={{width: '200px'}} />
      <div>
            <h1>Make the most of your professional life</h1>
            <form>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' />
            </form>
        </div>
    </div>
  )
}

export default UserLogin
