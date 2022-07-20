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
import Kids from '../images/nobackground/muslim-kids-no-background.png'
import girl from '../images/nobackground/muslim-girl-no-background.png'
import family from '../images/nobackground/muslimkids-no-background.png'
import quran from '../images/nobackground/quran-no-background.png'
import Button from '@mui/material/Button'
import Quran3 from '../images/Quran/quran3.jpg'
import Overlay from '../components/Overlay'

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
            <div className="contents">
              <div className="text">
                <h1>Quran Tajweed</h1>
                <h3>A precious way of reciting quran</h3>
                <p>Now! you and your children can learn Quran with Tajweed Rules and memorize it proficiently. With scholars from recongnized institutes. Similarly, you can Learn the meaning of the verses and the reasons behind revealing them. In other words you can build the understanding of Allah’s Book and apply it into your life.</p>
                <Button variant="contained" color="success">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-two">
          <div className="contents">
              <div className="text">
                <h1>Islamic Studies</h1>
                <h3>Let's build your mind with the knowledge of Islam</h3>
                <p>Without any doubt, all Muslim need to learn their Islam well. Including the fundamental basics of their beautiful religion. Therefore, we have made a comprehensive program that covers  Aqidah, Fiqh, Hadith, Seerah, Tafseer and Islamic History. In addition to a Special Islamic Course for beginners.</p>
                <Button variant="contained" color="success">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-three">
          <div className="contents">
              <div className="text">
                <h1>Noorani Qaida</h1>
                <h3>This is way to start learing Arabi and Quran</h3>
                <p>Bring your kids with Norani Qaida in the hand and get the best to start learning Quran, Hadith, and more about Islam. This is comprehensivec course for the children.</p>
                <Button variant="contained" color="success">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Mission />
      <Courses />
      <Pricing />
      <Feedbacks />
      <Overlay />
    </div>
  )


}

export default Home