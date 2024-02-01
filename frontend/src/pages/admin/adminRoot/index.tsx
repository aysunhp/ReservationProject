import React from 'react'
import AdminNavbar from '../../../layout/adminNavbar'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminRoot = (props: Props) => {
  return (
<>
<AdminNavbar/>
<Outlet/>
</>
  )
}

export default AdminRoot