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
import Footer from '../components/Footer'

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
                <h1>وَمَآ أَرْسَلْنَا مِن قَبْلِكَ إِلَّا رِجَالًا نُّوحِىٓ إِلَيْهِمْ ۚ فَسْـَٔلُوٓاْ أَهْلَ ٱلذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ</h1>
                <h3><strong>(And We sent not before you, [O Muhammad], except men to whom We revealed [the message], so ask the people of the message if you do not know. - 21:7)</strong></h3>
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
                <h1>فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ ۗ وَلَا تَعْجَلْ بِالْقُرْآنِ مِن قَبْلِ أَن يُقْضَىٰ إِلَيْكَ وَحْيُهُ ۖ وَقُل رَّبِّ زِدْنِي عِلْمًا</h1>
                <h3><strong>High above all is Allah, the King, the Truth! Be not in haste with the Qur'an before its revelation to thee is completed, but say, "O my Lord! advance me in knowledge."</strong></h3>
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
                <h1>أَمَّنْ هُوَ قَانِتٌ آنَاءَ اللَّيْلِ سَاجِدًا وَقَائِمًا يَحْذَرُ الْآخِرَةَ وَيَرْجُو رَحْمَةَ رَبِّهِ ۗ قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ ۗ إِنَّمَا يَتَذَكَّرُ أُولُو الْأَلْبَابِ </h1>
                <h3><strong>Is one who worships devoutly during the hour of the night prostrating himself or standing (in adoration), who takes heed of the Hereafter, and who places his hope in the Mercy of his Lord - (like one who does not)? Say: "Are those equal, those who know and those who do not know? It is those who are endued with understanding that receive admonition.</strong></h3>
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
      <Footer />
    </div>
  )


}

export default Home