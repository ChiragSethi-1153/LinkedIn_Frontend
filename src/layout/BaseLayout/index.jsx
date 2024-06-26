import React from 'react'
import { Outlet } from 'react-router-dom';


const BaseLayout = ({children}) => {
  return (
    <div sx={{width:"100vw !important",height:"100vh !important"}}>
        {<Outlet/> || children}
    </div>
  )
}

export default BaseLayout