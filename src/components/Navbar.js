import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.svg'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const handleOpen = () => {
    document.querySelector('.overlay-wrapper').classList.add('toggle')
  }
  return (
    <div className='navbar'>
      <header>
        <div className="contact-bar">
         <Link className='logo' to='/'><img src={Logo} alt="" /></Link>
          <div iv className="content">
            <div className="email">
              <h4>Email</h4>
              <h2>contact@aluloom.in</h2>
            </div>
            <div className="phone">
              <h4>Phone</h4>
              <h2>+919720070250</h2>
            </div>  
          </div>
        </div>
        <nav>
            <span onClick={handleOpen}>
              <MenuIcon>
                
              </MenuIcon>
              <Link className='logo' to='/'><img src={Logo} alt="" /></Link>
            </span>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><a href='#courses'>Courses</a></li>
                <li><Link to='#about'>About</Link></li>
            </ul>
            <Button variant='contained' color="success">
              <a href="https://surveyheart.com/form/62eb6e5324ff9216a5543bed" target="_blank">Enroll</a>
            </Button>
        </nav>
      </header>
    </div>
  )
}

export default Navbar