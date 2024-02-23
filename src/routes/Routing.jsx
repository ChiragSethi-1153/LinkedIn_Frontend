import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserSignup from '../components/UserSignup/UserSignup'
import UserLogin from '../components/UserLogin/UserLogin'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'


const Routing = () => {
  return (
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/signup' Component={UserSignup} />
        <Route path='/login' Component={UserLogin} />
        <Route path='/profile' Component={Profile} />
      </Routes>

  )
}

export default Routing
