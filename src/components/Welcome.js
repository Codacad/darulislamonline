import React from 'react'
import Allah from "../images/Allah.png"
import Prophet from '../images/prophet.png'
import Bismillah from '../images/bismillah.png'

const Welcome = () => {
  return (
    <div className='welcome'>
        <div className="welcome-contents">
            <header>
                <img className='Allah' src={Allah} alt="" />
                <img className='Bismillah' src={Bismillah} alt="" />
                <img className='Prophet' src={Prophet} alt="" />
            </header>
            <div className="text-contents">
                <h3>For Muslims, the most precious thing is their belief (Imaan)</h3>
                <h1>أَھْــلًا وَسَھْــلًا مـَرْحَـبَا</h1>
                <div className="whatisislam">
                    <h2>What is Islam?</h2>
                    <p>Islam is the only religion in the world that guides man in every way in his worldly and hereafter life, by which man succeeds in this world and in the hereafter, and Islam is a very dear religion and Islam is the true religion.</p>
                    <p>This is what Allah Ta'ala says in the Holy Qur'an, "Islam is the religion of Allah." According to Allah Ta'ala, the true religion is Islam</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome
