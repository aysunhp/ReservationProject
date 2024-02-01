import React from 'react'
import Navbar from "../../../layout/navbar"
import { Outlet } from 'react-router-dom'

const UserRoot = () => {
  return (
<>
<Navbar/>
<Outlet/>
</>
  )
}

export default UserRoot