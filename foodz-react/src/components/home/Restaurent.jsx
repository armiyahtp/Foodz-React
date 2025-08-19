import React, { useEffect, useState } from 'react'
import { axiosinstance } from '../../config/axios';
import clock from '/images/clock.png'
import star from '/images/star.png'
import { Link } from 'react-router-dom';

const Restaurent = () => {
    const [stores, setStore] = useState([])

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

export default Restaurent
