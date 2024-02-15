import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserSignup from '../components/UserSignup/UserSignup'
import UserLogin from '../components/UserLogin/UserLogin'
import Home from '../pages/Home'
import Footer from '../components/Footer/Footer'

const Routing = () => {
  return (
   <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/signup' Component={UserSignup} />
        <Route path='/login' Component={UserLogin} />
      </Routes>
      
   </div>
      
    
  )
}

export default Routing
