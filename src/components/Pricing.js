import React from 'react'
import { Link } from 'react-router-dom'
import Done from '../icons/done.svg'

const Pricing = () => {
  return (
    <div className='pricing'>
        <h1>Choose a Session</h1>
        <div className="contents">
            <div className="one-to-one">
                <div className="card">
                    <div className="header">
                        <h3>One-to-One Session</h3>
                        <h1>&#8377;800</h1>
                    </div>
                    <div className="body">
                        <ul>
                            <li><img src={Done} alt="" /><span>Lorem ipsum dolor sit amet.</span></li>
                            <li><img src={Done} alt="" /><span>Lorem ipsum dolor sit amet.</span></li>
                            <li><img src={Done} alt="" /><span>Lorem ipsum dolor sit amet.</span></li>
                            <li><img src={Done} alt="" /><span>Lorem ipsum dolor sit amet.</span></li>
                            <li><img src={Done} alt="" /><span>Lorem ipsum dolor sit amet.</span></li>
                        </ul>
                        <Link to="#">Next</Link>
                    </div>
                </div>
            </div>
            <div className="group">
                <div className="card">
                    <div className="header">
                        <h3>Group Session</h3>
                        <h1>&#8377;500</h1>
                    </div>
                    <div className="body">
                        <ul>
                            <li><img src={Done} alt="" /><span>Lorem ipsum dolor sit amet.</span></li>
                            <li><img src={Done} alt="" /><span>Lorem ipsum dolor sit amet.</span></li>
                            <li><img src={Done} alt="" /><span>Lorem ipsum dolor sit amet.</span></li>
                            <li><img src={Done} alt="" /><span>Lorem ipsum dolor sit amet.</span></li>
                            <li><img src={Done} alt="" /><span>Lorem ipsum dolor sit amet.</span></li>
                        </ul>
                        <Link to="#">Next</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing