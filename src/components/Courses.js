import React from 'react'
import education from '../icons/education.svg'
import { Link } from 'react-router-dom'
import Tajweed from '../images/course/tajweed.jpg'
import Qaida from '../images/course/qaida.jpg'
import Seera from '../images/course/seerah.jpg'
import Hifz from '../images/course/hifz.jpg'
import Tafseer from '../images/course/tafseer.jpg'
import Arabic from '../images/course/arabic.jpg'
import Urdu from '../images/course/urdu.jpg'
import English from '../images/course/english.jpg'
import Deeniyat from '../images/course/deeniyat.jpg'
import { Button } from '@mui/material'

const Courses = () => {
  return (
    <div className='courses' id='courses'>
        <div className="course-contents">
            <div className="course course-one">
                <div className="card">
                    <div className="title">
                        <img src={Tajweed} alt="" />
                        <h2>Quran Tajweed</h2>
                    </div>
                    <div className="body">
                       <div className="what">
                            <span className='what-text'>
                                <span></span>
                                <span>Reading Quran with all set of rules</span>
                            </span>
                       </div>
                        <a className='enroll' href='https://wa.me/+919720070250?text=Assalamualaikum, I want to learn "Quran Tajweed"'>Enroll Now</a>
                    </div>
                </div>
            </div>
            <div className="course course-two">
                <div className="card">
                    <div className="title">
                        <img src={Qaida} alt="" />
                        <h2>Noorani Qaida with Makhraz</h2>
                    </div>
                    <div className="body">
                        <div className="what">
                            <span className='what-text'>
                                <span></span>
                                <span>Reading with Makhraz</span>
                            </span>
                            <span className="what-text">
                                <span></span>
                                <span>Grammar</span>  
                            </span>                         
                            <span className='what-text'>
                                <span></span>
                                <span>Recognizing the Arabic letters</span>
                            </span>
                       </div>
                       <a className='enroll' href='https://wa.me/+919720070250?text=Assalamualaikum, I want to learn "Noorani Qaida with Makhraz"'>Enroll Now</a>
                    </div>
                </div>
            </div>
            <div className="course course-three">
                <div className="card">
                    <div className="title">
                        <img src={Deeniyat} alt="" />
                        <h2>Deeniyat</h2>
                    </div>
                    <div className="body">
                        <div className="what">
                            <span className="what-text">
                                <span></span>
                                <span>99 Names of Allah</span>  
                            </span> 
                            <span className="what-text">
                                <span></span>
                                <span>Daily Duas</span>  
                            </span>                         
                            <span className="what-text">
                                <span></span>
                                <span>Q & A of Seerah and more</span>  
                            </span> 
                        </div>
                        <p></p>
                        <a className='enroll' href='https://wa.me/+919720070250?text=Assalamualaikum, I want to learn "Deeniyat"'>Enroll Now</a>
                    </div>
                </div>
            </div>
            <div className="course course-four">
                <div className="card">
                    <div className="title">
                        <img src={Seera} alt="" />
                        <h2>Seerah</h2>
                    </div>
                    <div className="body">
                        <div className="what">
                            <span className='what-text'>
                                <span></span>
                                <span>Q & A</span>
                            </span>
                            <span className="what-text">
                                <span></span>
                                <span>Life of Prophet Mohammad ﷺ.</span>  
                            </span>                         
                       </div>
                       <a className='enroll' href='https://wa.me/+919720070250?text=Assalamualaikum, I want to learn "Seerat"'>Enroll Now</a>
                    </div>
                </div>
            </div>
            <div className="course course-five">
                <div className="card">
                    <div className="title">
                        <img src={Hifz} alt="" />
                        <h2>Quran Hifz</h2>
                    </div>
                    <div className="body">
                        <div className="what">
                            <span className='what-text'>
                                <span></span>
                                <span>Memorizing the Quran</span>
                            </span>                      
                       </div>
                       <a className='enroll' href='https://wa.me/+919720070250?text=Assalamualaikum, I want to learn "Quran Hifz"'>Enroll Now</a>
                    </div>
                </div>
            </div>
            <div className="course course-six">
                <div className="card">
                    <div className="title">
                        <img src={Tafseer} alt="" />
                        <h2>Tafseer Hadith & Quran</h2>
                    </div>
                    <div className="body">
                        <div className="what">
                            <span className='what-text'>
                                <span></span>
                                <span>Interpreting the Quran to understand the meaning of Ayah</span>
                            </span>                      
                       </div>
                       <a className='enroll' href='https://wa.me/+919720070250?text=Assalamualaikum, I want to learn "Tafseer Hadith & Quran"'>Enroll Now</a>
                    </div>
                </div>
            </div>
            <div className="course course-seven">
                <div className="card">
                    <div className="title">
                        <img src={Deeniyat} alt="" />
                        <h2>4 Years complete course of Alima</h2>
                    </div>
                    <div className="body">
                        <div className="what">
                            <span className="what-text">
                                <span></span>
                                <span>99 Names of Allah</span>  
                            </span> 
                            <span className="what-text">
                                <span></span>
                                <span>Daily Duas</span>  
                            </span>                         
                            <span className="what-text">
                                <span></span>
                                <span>Q & A of Seerah and more</span>  
                            </span> 
                        </div>
                        <p></p>
                        <a className='enroll' href='https://wa.me/+919720070250?text=Assalamualaikum, I want to learn "Deeniyat"'>Enroll Now</a>
                    </div>
                </div>
            </div>
            <div className="course course-eight">
                <div className="card">
                    <div className="title">
                        <img src={Arabic} alt="" />
                        <h2>Arabic</h2>
                    </div>
                    <div className="body">
                        <div className="what">
                            <span className='what-text'>
                                <span></span>
                                <span>Learning to Understand, read, write, and speak the Arabic language</span>
                            </span>                      
                       </div>
                       <a className='enroll' href='https://wa.me/+919720070250?text=Assalamualaikum, I want to learn "Arabic"'>Enroll Now</a>
                    </div>
                </div>
            </div>
            <div className="course course-nine">
                <div className="card">
                    <div className="title">
                        <img src={Urdu} alt="" />
                        <h2>Urdu</h2>
                    </div>
                    <div className="body">
                        <div className="what">
                            <span className='what-text'>
                                <span></span>
                                <span>Learning to Understand, read, and write the Urdu language</span>
                            </span>                      
                       </div>
                       <a className='enroll' href='https://wa.me/+919720070250?text=Assalamualaikum, I want to learn "Urdu"'>Enroll Now</a>
                    </div>
                </div>
            </div>
            <div className="course course-ten">
                <div className="card">
                    <div className="title">
                        <img src={English} alt="" />
                        <h2>English</h2>
                    </div>
                    <div className="body">
                        <div className="what">
                            <span className='what-text'>
                                <span></span>
                                <span>Learning to Understand, read, write, and speak the English language</span>
                            </span>
                            <span className='what-text'>
                                <span></span>
                                <span>Beginner friendly</span>
                            </span>                     
                       </div>
                       <a className='enroll' href='https://wa.me/+919720070250?text=Assalamualaikum, I want to learn "English"'>Enroll Now</a>
                    </div>
                </div>
            </div>
            <div className="course course-eleven">
                <div className="card">
                    <div className="title">
                        <img src={English} alt="" />
                        <h2>Other Courses</h2>
                    </div>
                    <div className="body">
                        <div className="what">
                            <span className='what-text'>
                                <span></span>
                                <span>Dalil-e namaz course</span>
                            </span>
                            <span className='what-text'>
                                <span></span>
                                <span>Ramazan course</span>
                            </span>  
                            <span className='what-text'>
                                <span></span>
                                <span>Etikaf  course</span>
                            </span>                    
                            <span className='what-text'>
                                <span></span>
                                <span>Hajj course</span>
                            </span> 
                            <span className='what-text'>
                                <span></span>
                                <span>Waz-u nasihat course</span>
                            </span> 
                            <span className='what-text'>
                                <span></span>
                                <span>Qurbani ke nisab ka maiyaar Sona hai ya chandi</span>
                            </span> 
                            <span className='what-text'>
                                <span></span>
                                <span>Tabligi jamaat 6 number course</span>
                            </span>
                            <span className='what-text'>
                                <span></span>
                                <span>For more information about these course  contact  us As soon as possible</span>
                            </span> 
                       </div>
                       <a className='enroll' href='https://wa.me/+919720070250?text=Assalamualaikum, I want to learn "English"'>Enroll Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses
