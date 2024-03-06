import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserSignup from '../pages/UserSignup/UserSignup'
import UserLogin from '../pages/UserLogin/UserLogin'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import MyNetwork from '../pages/MyNetwork/MyNetwork'
import ManageRequest from '../pages/MyNetwork/ManageRequest'
import Messages from '../pages/Messages/Messages'

import io from 'socket.io-client'

const socket = io.connect(process.env.REACT_APP_SERVER)

const Routing = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/mynetwork' element={<MyNetwork />} />
        <Route path='/mynetwork/manage' element={<ManageRequest />} />
        <Route path='/messages' element={<Messages socket={socket} />} />
      </Routes>

  )
}

export default Routing
