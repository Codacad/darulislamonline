import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <Link className='logo' to='/aluloomonline'><img src={Logo} alt="" /></Link>
            <ul>
                <li><Link to='/aluloomonline'>Home</Link></li>
                <li><Link to='/aluloomonline/#courses'>Courses</Link></li>
                <li><Link to='/aluloomonline/contact'>Contact</Link></li>
                <li><Link to='/aluloomonline/about'>About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar