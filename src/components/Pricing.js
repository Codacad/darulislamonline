import React from 'react'
import { Link } from 'react-router-dom'
import Done from '../icons/done.svg'
import {School, Wc, Schedule, Grade, Construction, RepeatOneOn, Groups, MoreTime, MeetingRoom, Shield } from "@mui/icons-material"

const Pricing = () => {
  return (
    <div className='facilites'>
        <h1>Our Facilities</h1>
        <div className="contents">
            <div className="facility">
                <School></School>
                <span>Qualified Teachers</span>
            </div>
            <div className="facility">
                <Schedule></Schedule>
                <span>Classes Based on Flexible Schedule</span>
            </div>
            <div className="facility">
                <RepeatOneOn></RepeatOneOn>
               <span>One on One Sessions</span>
            </div>
            <div className="facility">
                <Wc></Wc>
                <span>Male and Female Teachers</span>
            </div>
            <div className="facility">
                <Schedule></Schedule>
                <span>Classes Based on Flexible Schedule</span>
            </div>
            <div className="facility">
                <Grade></Grade>
                <span>Special Classes</span>
            </div>
            <div className="facility">
                <Construction></Construction>
                <span>Demo Classes</span>
            </div>
            <div className="facility">
                <Shield></Shield>
                <span>Qualitiy Education</span>
            </div>
            <div className="facility">
                <MeetingRoom></MeetingRoom>
                <span>Parents' Meeting</span>
            </div>
            <div className="facility">
                <MoreTime></MoreTime>
                <span>Extra Time</span>
            </div>
            <div className="facility">
                <MeetingRoom></MeetingRoom>
                <span>Students' Meeting on each Sunday</span>
            </div>
        </div>
    </div>
  )
}

export default Pricing