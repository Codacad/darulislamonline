import React from 'react'
import Shahada from "../images/pillars/quran.svg"
import Salah from "../images/pillars/mosque.svg"
import Zakat from "../images/pillars/charity.svg"
import Fasting from "../images/pillars/fasting.svg"
import Hajj from "../images/pillars/kabah.svg"

const Pillars = () => {
  return (
    <div className='pillars'>
        <div className="pillars-contents">
            <div className="header">
                <h1>The pillars of Islam</h1>
                <div className="whatare">
                    <h3>What are the five pillars of Islam?</h3>
                    <p>
                        The most important Islamic practives are five pillars of Islam. <strong>The five pillars of Islam are <span>Shahada</span>, <span>Salah</span>, <span>Zakat</span>, <span>Sawm</span>, and <span>Hajj</span></strong>
                    </p>
                </div>
            </div>
           <div className="five-pillars">
            <div className="pillar shahada">
                    <img src={Shahada} alt="" />
                    <h2>Shahada</h2>
                    <span>Faith</span>
                </div>
                <div className="pillar salah">
                    <img src={Salah} alt="" />
                    <h2>Salah</h2>
                    <span>Prayer (5 times a day)</span>
                </div>
                <div className="pillar zakat">
                    <img src={Zakat} alt="" />
                    <h2>Zakat</h2>
                    <span>Almsgiving (to the eligible (poor) people)</span>
                </div>
                <div className="pillar sawm">
                    <img src={Fasting} alt="" />
                    <h2>Sawm</h2>
                    <span>Fasting</span>
                </div>
                <div className="pillar hajj">
                    <img src={Hajj} alt="" />
                    <h2>Hajj</h2>
                    <span>Pilgrimage</span>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Pillars