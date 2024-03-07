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
import Notifications from '../pages/Notifications/Notifications'

const socket = io.connect(process.env.REACT_APP_SERVER)
const notificationSocket = io.connect(process.env.REACT_APP_MICROSERVICE_URL)
const Routing = () => {
  return (
      <Routes>
        <Route path='/' element={<Home socket={notificationSocket} />} />
        <Route path='/home' element={<Home socket={notificationSocket} />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/mynetwork' element={<MyNetwork />} />
        <Route path='/mynetwork/manage' element={<ManageRequest />} />
        <Route path='/messages' element={<Messages socket={socket} />} />
        <Route path='/notifications' element={<Notifications socket={notificationSocket} />} />
      </Routes>

  )
}

export default Routing
