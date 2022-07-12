import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <Link className='logo' to='/'><img src={Logo} alt="" /></Link>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/courses'>Courses</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar