import { ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import clock from '/images/clock.png'
import star from '/images/star.png'
import discount from '/images/discount.png'
import { useParams } from 'react-router-dom'
import { axiosinstance } from '../config/axios'

const SingleRstaurant = () => {
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState({})

    const num = Number(id)
    const token = localStorage.getItem('BearToken')

    useEffect(()=>{
        const getSingleRestaurant = async () => {
            try {
                const response = await axiosinstance.get(`single/rest/${num}/`, {
                    headers: {Authorization: `Bearer ${token}`}
                })
                setRestaurant(response.data.data)
                console.log(restaurant)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleRestaurant()
    },[])
    return (
        <div>
            <section class="py-10 lg:px-[25%]">
                <section class="wrapper">
                    <div class="rounded-lg shadow-lg border p-5">
                        <a href="" class="flex justify-start items-start">
                            <img src={restaurant.image} alt="" class="w-[40%] md:w-[30%] rounded-lg mr-6" />
                            <div class="w-[60%] md:w-[70%]">
                                <h3 class="text-[#515151] text-[16px] font-semibold mb-2">{restaurant.name}</h3>
                                <p class="text-[#515151] text-[12px]">{restaurant.tagline}</p>
                                <div class="flex justify-start items-center mt-5 mb-3">
                                    <span class="flex justify-start items-center text-[#515151] text-[14px] font-semibold mr-4">
                                        <img src={star} alt="image" class="w-[16px] mr-2" />
                                        {restaurant.rating}
                                    </span>
                                    <span class="flex justify-start items-center text-[#515151] text-[14px] font-semibold">
                                        <img src={clock} alt="image" class="w-[16px] mr-2" />
                                        {restaurant.time} min
                                    </span>
                                </div>
                                <span class="flex justify-start items-center text-red-600 text-[10px] md:text-[13px] font-semibold">
                                    <img src={discount} alt="" class="w-[13px] mr-2" />
                                    {restaurant.offer}
                                </span>
                            </div>
                        </a>
                    </div>
                </section>
            </section>



            <section class="py-10 lg:px-[25%] mb-14 lg:mb-0">
                <section class="wrapper">
                    <div class="border-b-4 mb-12">
                        <h2 class="text-[#515151] text-[20px] font-bold p-5"></h2>

                        <div class="border-b p-5">
                            <div class="flex justify-between items-start">
                                <div class="w-[60%] md:w-[75%]">
                                    <img src="" alt="" class="w-[14px]" />

                                    <img src="" alt="" class="w-[14px]" />

                                    <h3 class="text-[#515151] text-[16px] font-bold mb-1"></h3>
                                    <p class="text-[#515151] text-[16px] font-semibold mb-5">₹ </p>


                                    <div class="rounded-lg flex ">
                                        <a href="" class="w-[30px] h-[34px] text-center py-[3px] bg-[#2AC489] rounded-s-lg text-white font-semibold">-</a>
                                        <span class="text-center w-6 border-b pb-1 border-t pt-1 "></span>
                                        <a href="" class="w-[30px] h-[34px] text-center py-[3px] bg-[#2AC489] rounded-e-lg text-white font-semibold">+</a>
                                    </div>

                                    <a href="">
                                        <button class="text-[12px] text-white font-semibold rounded-md border-2 py-[2px] px-3 bg-[#2AC489]">ADD</button>
                                    </a>


                                </div>
                                <div class="w-[40%] md:w-[25%]">
                                    <img src="" alt="" class="w-full shadow-lg rounded-lg mr-6" />
                                </div>
                            </div>
                        </div>
                    </div>






                    <div class="bg-red-500 px-4 rounded-xl h-[50px] flex justify-between items-center">
                        <p class="text-[16px] text-white font-semibold">1 item | ₹ 256</p>
                        <a href="" class="flex justify-start items-center">
                            <p class="text-[16px] text-white font-semibold mr-3">View Cart</p>
                            <ShoppingCart class="w-[18px] text-white" />
                        </a>
                    </div>


                </section>
            </section>
        </div>
    )
}

export default SingleRstaurant
