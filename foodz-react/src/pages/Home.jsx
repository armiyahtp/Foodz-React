import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import { axiosinstance } from '../config/axios';
import clock from '/images/clock.png'
import star from '/images/star.png'
import { Link } from 'react-router-dom';

const Home = () => {

    const [sliders, setSliders] = useState([])
    const [categories, setCategories] = useState([])
    const [stores, setStore] = useState([])

    console.log(stores)

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


    useEffect(()=>{
        const getStore = async () => {
            try {
                const response = await axiosinstance.get('store/')
                setStore(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getStore()
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
                                <div key={index} className="min-w-[25%] max-w-[25%] sm:min-w-[20%] sm:max-w-[20%] md:min-w-[15%] md:max-w-[15%] mr-6">
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






            <section className="py-10 mb-14 lg:mb-0">
                <section className="wrapper">
                    <h1 className="text-[#515151] text-[24px] font-semibold mb-6">Top Restaurants!</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                        {
                            stores.map((store, index) => (
                                <div key={index} className="col-span-1 rounded-lg border p-7">
                                    <Link to={`/single-res/${store.id}`}>
                                        <a href="" className="flex justify-start items-center">
                                            <img src={store.image} alt="" className="w-[30%] rounded-lg mr-5"/>
                                            <div className="w-[70%]">
                                                <h3 className="text-[#515151] text-[16px] font-semibold">{store.name}</h3>
                                                <p className="text-[#515151] text-[12px]">{store.tagline}</p>
                                                <div className="flex justify-start items-center mt-3 mb-3">
                                                    <span className="flex justify-start items-center text-[#515151] text-[14px] font-semibold mr-4">
                                                        <img src={star} alt="image" className="w-[16px] mr-2"/>
                                                        {store.rating}
                                                    </span>
                                                    <span className="flex justify-start items-center text-[#515151] text-[14px] font-semibold">
                                                        <img src={clock} alt="image" className="w-[16px] mr-2"/>
                                                        {store.time} min
                                                    </span>
                                                </div>
                                                <span className="flex justify-start items-center text-red-600 text-[12px] font-semibold">
                                                    <img src="" alt="" className="w-[13px] mr-2"/>
                                                    {store.offer}
                                                </span>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </section>


        </div>
    )
}

export default Home
