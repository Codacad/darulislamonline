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
                                <h4>Mahira Khan</h4>
                                <h6><img src={Address} alt="" /> <span>Uttarakhand</span></h6>
                            </div>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio illo et pariatur ratione aliquam id blanditiis perferendis tempore dolore harum, autem repellendus ipsam, ducimus suscipit culpa itaque similique dolores exercitationem officia molestiae doloremque provident iusto! Consequatur error cum, reiciendis ea repellendus autem unde quis omnis distinctio pariatur alias quia.</p>
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
                                <h4>Mahira Khan</h4>
                                <h6><img src={Address} alt="" /> <span>Uttarakhand</span></h6>
                            </div>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio illo et pariatur ratione aliquam id blanditiis perferendis tempore dolore harum, autem repellendus ipsam, ducimus suscipit culpa itaque similique dolores exercitationem officia molestiae doloremque provident iusto! Consequatur error cum, reiciendis ea repellendus autem unde quis omnis distinctio pariatur alias quia.</p>
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
                                <h4>Mahira Khan</h4>
                                <h6><img src={Address} alt="" /> <span>Uttarakhand</span></h6>
                            </div>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio illo et pariatur ratione aliquam id blanditiis perferendis tempore dolore harum, autem repellendus ipsam, ducimus suscipit culpa itaque similique dolores exercitationem officia molestiae doloremque provident iusto! Consequatur error cum, reiciendis ea repellendus autem unde quis omnis distinctio pariatur alias quia.</p>
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
                                <h4>Mahira Khan</h4>
                                <h6><img src={Address} alt="" /> <span>Uttarakhand</span></h6>
                            </div>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio illo et pariatur ratione aliquam id blanditiis perferendis tempore dolore harum, autem repellendus ipsam, ducimus suscipit culpa itaque similique dolores exercitationem officia molestiae doloremque provident iusto! Consequatur error cum, reiciendis ea repellendus autem unde quis omnis distinctio pariatur alias quia.</p>
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
                                <h4>Mahira Khan</h4>
                                <h6><img src={Address} alt="" /> <span>Uttarakhand</span></h6>
                            </div>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio illo et pariatur ratione aliquam id blanditiis perferendis tempore dolore harum, autem repellendus ipsam, ducimus suscipit culpa itaque similique dolores exercitationem officia molestiae doloremque provident iusto! Consequatur error cum, reiciendis ea repellendus autem unde quis omnis distinctio pariatur alias quia.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>  
    </div>
  )
}

export default Feedbacks