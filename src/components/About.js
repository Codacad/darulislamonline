import React from 'react'
import AboutImg from "../images/Pictures/about-side.png"

const About = () => {
  return (
    <div className='about'>
        <div className="about-contents">
            <div className="img-side">
                <img src={AboutImg} alt="" />
            </div>
            <div className="about-text">
                <h1>About Us</h1>
                <p>Al-Uloom is an online education institute, located in Afjalgarh, Bijnor, UP. In our Institute, we have well-educated teachers who graduated from certified Islamic Institutes, and they have a good method of teaching and character as well We have been teaching people for many years and made hundreds of people learn Quran and necessary Islamic aspects. We have students aged up to 65 years in our institute. We have served many people in an Islamic way. </p>
            </div>
        </div>
    </div>
  )
}

export default About