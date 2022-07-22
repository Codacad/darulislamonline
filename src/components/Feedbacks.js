import React, {useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination, EffectFade, EffectFlip, Autoplay} from 'swiper'
import Avatar from '../icons/avatar.svg'
import 'swiper/css/pagination'
import 'swiper/css'
import Address from '../icons/address.svg'


const Feedbacks = () => {

    let [slideperview, setSlideperview] = useState(0);
    
    useEffect(() => {
        slideperview = window.innerWidth <= 976 ? 1 : 2;
        setSlideperview(slideperview)
    })
   
    useEffect(() => {
        window.addEventListener('resize', () => {
            slideperview = window.innerWidth <= 976 ? 1 : 2;
            setSlideperview(slideperview)
        })
    })

  return (
    <div className='feedbacks'>
        <h1>What our students say about us.</h1>
        <Swiper 
        modules={[Pagination, EffectFade, EffectFlip, Autoplay]}
        pagination={true}
        effect
        autoplay
        speed={800}
        slidesPerView={slideperview}
        className='mySwiper-navigation'
        >
            <SwiperSlide>
                <div className="feedback feedback-one">
                    <div className="card">
                        <div className="header">
                            <img src={Avatar} alt="" />
                            <div className="name-address">
                                <h4>Yasmeen Mansoori</h4>
                                <h6><img src={Address} alt="" /> <span>Uttar Pradesh</span></h6>
                            </div>
                        </div>
                        <div className="body">
                            <p>I have a 7-year-old son and a 13 years old daughter. They are the students at Al-Uloomonline. There is neither Islamic School nor a Mosque around us where my children may go to learn Islam. I want to say that my children have been learning about Islam with Al-Uloomonline. Alhamdulillah, my children are now successful to read Quran and they have learned a lot about Islam. I am absolutely happy that my children have learned from Al-Uloomonline about Islam.
                                I am really thankful to Al-Uloomonline for teaching my children beautiful things.
                                May Allah succeed them their way.
                            </p>
                            <h4>Yasmeen Mansoori (Mother Rayyan and Aaliya)</h4>
                            <h5>(Learning Quran with Tajweed)</h5>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="feedback feedback-two">
                    <div className="card">
                        <div className="header">
                            <img src={Avatar} alt="" />
                            <div className="name-address">
                                <h4>Mohd Danish</h4>
                                <h6><img src={Address} alt="" /> <span>Uttarakhand</span></h6>
                            </div>
                        </div>
                        <div className="body">
                            <p>I am Mohd Danish and I am 20 years old. I am doing graduation. I didn't know about Islam well so far but I wanted to learn about Islam and now at the age of 20 I was a little hesitant to go to Islamic School that's why I joined Al-Uloomonline and started studying Islamic Studies. My teacher guided and taught me well. I have completed basic Islamic Studies successfully with the help of Al-Uloomonline.
                                I have seen that I am going to learn about Islam successfully. I thank Allah that He gave me the opportunity of gaining knowledge of Islam with Al-Uloomonline's team.
                            </p>
                            <h4>Mohd Danish (Learning Noorani Qaida with Makhraz)</h4>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="feedback feedback-two">
                    <div className="card">
                        <div className="header">
                            <img src={Avatar} alt="" />
                            <div className="name-address">
                                <h4>Mohd Noshad Ali</h4>
                                <h6><img src={Address} alt="" /> <span>Uttar Pradesh</span></h6>
                            </div>
                        </div>
                        <div className="body">
                            <p>I am Noshad Ali. I am 49 years old. Alhamdulillah, I am learning Quran Tafseer and it's going very successful. I work during the day and study at the night. I am feeling blessed that I am learning to read Quran at this age. May Allah grant me success in what I am learning today. I think there is no age for gaining knowledge. People can learn anything at any age. May Allah guide us to live a better life according to Quran and Sunnah, - Aameen  summa Aameen
                            </p>
                            <h4>Mohd Noshad Ali (Learning Quran Tafseer)</h4>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="feedback feedback-two">
                    <div className="card">
                        <div className="header">
                            <img src={Avatar} alt="" />
                            <div className="name-address">
                                <h4>Mohd Abuzar</h4>
                                <h6><img src={Address} alt="" /> <span>Nepal</span></h6>
                            </div>
                        </div>
                        <div className="body">
                            <p>I am Mohd Abuzar. I live in Nepal. I am a student of Al-Uloomonline. I think I have chosen a good platform to learn about Islam because the teacher of Al-Uloomonline are well educated and recognized by certified institutes. I am doing a Deeniyat course in which there are various topics of Islamic studies such as the History of the Prophet ﷺ, prayers, etc. Alhamdulillah, I am learning successfully. I am really thankful to my Mufti Sahab. May Allah give him success. </p>
                            <h4>Mohd Abuzar (Learning Deeniyat)</h4>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>  
    </div>
  )
}

export default Feedbacks