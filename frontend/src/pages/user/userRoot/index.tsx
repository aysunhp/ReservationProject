
import Footer from "../../../layout/footer"
import Navbar from "../../../layout/navbar"
import { Outlet } from 'react-router-dom'

const UserRoot = () => {
  return (
<>
<Navbar/>
<Outlet/>
<Footer/>
</>
  )
}

export default UserRoot