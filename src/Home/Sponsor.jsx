import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';


const sponsorList = [
  {
    imgUrl: "/src/assets/images/01.png"
  },
  {
    imgUrl: "/src/assets/images/02.png"
  },
  {
    imgUrl: "/src/assets/images/03.png"
  },
  {
    imgUrl: "/src/assets/images/04.png"
  },
  {
    imgUrl: "/src/assets/images/05.png"
  },
  {
    imgUrl: "/src/assets/images/06.png"
  },
]

const Sponsor = () => {
  return (
    <div className='container swiper-section fullscreen:max-w-1530 pl-28 pr-28'>
      <Swiper
       slidesPerView={2}
       spaceBetween={20}
       autoplay={
        {
          delay: 2000,
          disableOnInteraction: false,
        }
       }
       breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        }
       }}
       modules={[Autoplay]}
       className="mySwiper"
       >
        {
          sponsorList.map((val, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-slides">
                <img src={val.imgUrl} className='swiper-img' alt="" />
              </div>
            </SwiperSlide>
          ))          
        }
       </Swiper>
    </div>
  )
}

export default Sponsor