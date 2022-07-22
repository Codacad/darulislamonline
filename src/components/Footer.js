import React from 'react'
import { Link } from 'react-router-dom'
import {Call, AddLocation, Email} from "@mui/icons-material"
import {Facebook, Instagram, YouTube, Twitter} from "@mui/icons-material"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-contents">
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13931.468550443786!2d78.89487345!3d29.1980383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1658466138815!5m2!1sen!2sin" style={{border:"0", borderRadius:"5px"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/aluloomonline">Home</Link></li>
                    <li><Link to="/aluloomonline/courses">Courses</Link></li>
                    <li><Link to="/aluloomonline/Gallery">Gallery</Link></li>
                    <li><Link to="/aluloomonline/about">About</Link></li>
                </ul>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <div className="address">
                    <AddLocation></AddLocation>
                    <span>244601 Faridngar, Thakurdwara, Moradabad, UP.</span>
                </div>
                <div className="email">
                    <Email></Email>
                    <span>contact@aluloomonline.in</span>
                </div>
                <div className="phone">
                    <Call></Call>
                    <span>+919720070250</span>
                </div>
            </div>
            <div className="social-medias">
                <h3>Connect with us</h3>
               <div className="icons">
                <Link to="#" className='facebook'>
                        <Facebook></Facebook>
                    </Link>
                    <Link to="#" className='instagram'>
                        <Instagram></Instagram>
                    </Link>
                    <Link to="#" className='twitter'>
                        <Twitter></Twitter>
                    </Link>
                    <Link to="#" className='youtube'>
                        <YouTube></YouTube>
                    </Link>
               </div>
            </div>
        </div>
        <div className="copyright">
            <span>&copy; Copyright <Link to='/'>Aluloomonline</Link> 2022-2023</span>
        </div>
    </div>
  )
}

export default Footer