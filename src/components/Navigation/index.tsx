import './index.css'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='navigation'>
      <div className='logo'>
        <Link to='/'>React Meetups</Link>
      </div>
      <div className='links'>
        <Link to='/'>All Meetups</Link>
        <Link to='/new-meetup'>New Meetups</Link>
        <Link to='/favorites'>Favorites</Link>
      </div>
    </div>
  )
}
export default Navigation
