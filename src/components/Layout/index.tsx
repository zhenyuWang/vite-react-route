import './index.css'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation'

function Layout() {
  return (
    <>
      <Navigation />
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}
export default Layout
