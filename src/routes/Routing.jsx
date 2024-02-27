import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserSignup from '../pages/UserSignup/UserSignup'
import UserLogin from '../pages/UserLogin/UserLogin'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import MyNetwork from '../pages/MyNetwork/MyNetwork'


const Routing = () => {
  return (
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/signup' Component={UserSignup} />
        <Route path='/login' Component={UserLogin} />
        <Route path='/profile' Component={Profile} />
        <Route path='/mynetwork' Component={MyNetwork} />
      </Routes>

  )
}

export default Routing
