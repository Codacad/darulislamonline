import React from 'react'
import imag from '../images/iffat.jpeg'

const Mission = () => {
  return (
    <div className='mission'>
        <div className="mission-contents">
            <h1>Our Mission</h1>
            <div className="content">
              <img src={imag} alt="" />
              <p>
                We are an Islamic education platform, our mission is to provide Islamic education to the people around the world who are seeking knowledge of Islam and want to learn necessary Islamic aspects to improve their life structure. So that each Muslim may acquire the knowledge of the Qur'an and Hadith, walk straight towards Allah Subhanahu Wa Ta'ala, and may serve Islam as well as doing good deeds for ourselves, live better lives according to Quran and Sunnah, and gain success in the hereafter and in the world as well.
              </p>
           </div>
        </div>
    </div>
  )
}

export default Mission