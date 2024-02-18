import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserSignup from '../components/UserSignup/UserSignup'
import UserLogin from '../components/UserLogin/UserLogin'
import Home from '../pages/Home/Home'


const Routing = () => {
  return (
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/signup' Component={UserSignup} />
        <Route path='/login' Component={UserLogin} />
      </Routes>

  )
}

export default Routing
