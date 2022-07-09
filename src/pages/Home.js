import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination, EffectFade, EffectFlip, Autoplay} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-flip'
import 'swiper/css/autoplay'
import 'swiper/css'
import Mission from '../components/Mission'
import Courses from '../components/Courses'
import Feedbacks from '../components/Feedbacks'
import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <div className="home">
      <Swiper
        modules={[Pagination, EffectFade, EffectFlip, Autoplay]}
        pagination={true}
        effect
        autoplay
        speed={800}
        slidesPerView={1}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className="slide slide-one">
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-two">
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-three">
            
          </div>
        </SwiperSlide>
      </Swiper>
      <Mission />
      <Courses />
      <Pricing />
      <Feedbacks />
    </div>
  )
}

export default Home