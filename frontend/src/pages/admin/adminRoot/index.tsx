
import AdminNavbar from '../../../layout/adminNavbar'
import { Outlet } from 'react-router-dom'


const AdminRoot = () => {
  return (
<>
<AdminNavbar/>
<Outlet/>
</>
  )
}

export default AdminRoot