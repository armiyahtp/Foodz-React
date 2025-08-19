import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';
import slide1 from '/images/slide1.png'
import slide2 from '/images/slide2.png'
import slide3 from '/images/slide3.png'

const Home = () => {
    return (
        <div>
            <section class="wrapper py-10">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    breakpoints={
                        {
                            576 : {slidesPerView : 2},
                            768 : {slidesPerView : 3}
                        } 
                    }

                    autoplay={{delay: 3000,
                        disableOnInteraction:true,
                        ioop:true
                    }}
                    loop:true
                >

                    <SwiperSlide><img src={slide1} alt="" className='rounded-2xl'/></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" className='rounded-2xl'/></SwiperSlide>
                    <SwiperSlide><img src={slide3} alt="" className='rounded-2xl'/></SwiperSlide>
                </Swiper>
            </section>


        </div>
    )
}

export default Home
