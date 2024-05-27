import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';


const NavbarLayout = ({ children }) => {


  return (
    <div sx={{ flex: 1, height: "100% !important" }}>
      <Navbar />
      
      {<Outlet /> || children}
      
    </div>
  )
}

export default NavbarLayout