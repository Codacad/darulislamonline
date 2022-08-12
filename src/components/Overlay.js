import React from 'react'
import { Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.svg'
const Overlay = () => {
    const handleClose = () => {
        document.querySelector('.overlay-wrapper').classList.remove('toggle')
    }
  return (
    <div className='overlay-wrapper'>
        <div className="overlay">
           <div className="contents">
                <header>
                    <Link className='logo' to='/aluloomonline'><img src={Logo} alt="" /></Link>
                    <span>
                        <span>
                            <CloseIcon  onClick={handleClose}>
                            </CloseIcon>
                        </span>
                    </span>
                </header>
                <Button variant='contained' color="secondary">
                    <a href="https://surveyheart.com/form/62eb6e5324ff9216a5543bed" target="_blank">Enroll</a>
                </Button>
                <ul>
                    <li><Link to='/aluloomonline'>Home</Link></li>
                    <li><Link to='/aluloomonline/#courses'>Courses</Link></li>
                    <li><Link to='/aluloomonline/contact'>Contact</Link></li>
                    <li><Link to='/aluloomonline/about'>About</Link></li>
                </ul>
                <div iv className="content">
                    <div className="email">
                        <h4>Email</h4>
                        <h2>contact@darulislamonline.in</h2>
                    </div>
                    <div className="phone">
                        <h4>Phone</h4>
                        <h2>+919720070250</h2>
                    </div>  
                </div>
           </div>
        </div>
    </div>
  )
}

export default Overlay