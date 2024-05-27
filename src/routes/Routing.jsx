import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserSignup from '../pages/UserSignup/UserSignup'
import UserLogin from '../pages/UserLogin/UserLogin'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import MyNetwork from '../pages/MyNetwork/MyNetwork'
import ManageRequest from '../pages/MyNetwork/ManageRequest'
import Messages from '../pages/Messages/Messages'
import BaseLayout from '../layout/BaseLayout'
import io from 'socket.io-client'
import NavbarLayout from '../layout/NavbarLayout'
import Notifications from '../pages/Notifications/Notifications'
import Jobs from '../pages/Jobs/Jobs'
import Navbar from '../components/Navbar/Navbar'
import { Stack } from '@mui/material'

const socket = io.connect(process.env.REACT_APP_SERVER)
const notificationSocket = io.connect(process.env.REACT_APP_MICROSERVICE_URL)

const Routing = (isLoggedin) => {

const routes = [
  {
    path: '',
    element: isLoggedin ? <Navigate to={'/home'} /> : <BaseLayout />,
    children: [
      {
          path: 'login',
          element: <UserLogin />
      },
      {
          path: 'register',
          element: <UserSignup />
      },
  ]
  },
  {
    path: '/',
    element: isLoggedin? <NavbarLayout /> : <Navigate to={"/login"}/>,
    children: [
        {
            path: '/home',
            element: <Home socket={notificationSocket} />
        },
        {
            path: '/messages',
            element: <Messages socket={socket} />
        },
        {
            path: 'mynetwork',
            element: <MyNetwork />,
            
        },
        {
          path: '/mynetwork/manage',
          element: <ManageRequest />
        },
        {
            path: "/notifications",
            element:<Notifications socket={notificationSocket} />
        }, 
        {
            path: "jobs",
            element: <Jobs />
        },
        {
            path:"profile",
            children:[
                {
                    path:'',
                    element:<Profile />
                },
                {
                    path:':user_id',
                    element:<Profile />
                }
            ]
        }
    ]
}
]
return routes
  // return (
    
  //     <Routes >
  //       <Route path='/' element={<Home socket={notificationSocket} />} />
  //       <Route path='/home' element={<Home socket={notificationSocket} />} />
  //       <Route path='/register' element={<UserSignup />} />
  //       <Route path='/login' element={<UserLogin />} />
  //       <Route path='/profile' element={<Profile />} />
  //       <Route path='/mynetwork' element={<MyNetwork />} />
  //       <Route path='/mynetwork/manage' element={<ManageRequest />} />
  //       <Route path='/jobs' element={<Jobs />} />
  //       <Route path='/messages' element={<Messages socket={socket} />} />
  //       <Route path='/notifications' element={<Notifications socket={notificationSocket} />} />
  //     </Routes>

  // )
}

export default Routing
