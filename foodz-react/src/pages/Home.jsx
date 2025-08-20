import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import { axiosinstance } from '../config/axios';
import Restaurent from '../components/home/Restaurent';
import { useSign } from '../context/SignContext';
import Register from './Register';
import Login from './Login';

const Home = () => {

    const { register, login } = useSign()
    const [sliders, setSliders] = useState([])
    const [categories, setCategories] = useState([])


    useEffect(() => {
        const getSlider = async () => {
            try {
                const response = await axiosinstance.get('slider/')
                setSliders(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSlider()
    }, [])


    useEffect(()=>{
        const getCategory = async () =>{
            try {
                const response = await axiosinstance.get('store/category/')
                setCategories(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getCategory()
    },[])



    return (
        <div>
            <section className="wrapper py-10">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={40}
                    breakpoints={
                        {
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 }
                        }
                    }

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                        loop : true
                    }}
                >
                    {
                        sliders.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.image} alt="" className='rounded-2xl' />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </section>





            <section className="py-10">
                <section className="wrapper">
                    <h1 className="text-[#515151] text-[24px] font-semibold mb-6">What's on your mind?</h1>
                    <div className="flex justify-start overflow-x-scroll items-center ">
                        {
                            categories.map((item,index) => (
                                <div key={index} className="min-w-[25%] max-w-[25%] sm:min-w-[20%] sm:max-w-[20%] md:min-w-[12%] md:max-w-[12%] mr-6">
                                    <a href="">
                                        <img src={item.image} alt=""/>
                                        <h3 className="text-[#515151] text-center">{item.name}</h3>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </section>

            <Restaurent />


            <div className={`${register} fixed inset-0 z-50`}>
                <Register />
            </div>
            <div className={`${login} fixed inset-0 z-50`}>
                <Login />
            </div>
        </div>
    )
}

export default Home
