import { ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import clock from '/images/clock.png'
import star from '/images/star.png'
import veg from '/images/veg.png'
import non from '/images/non.png'
import discount from '/images/discount.png'
import { useParams } from 'react-router-dom'
import { axiosinstance } from '../config/axios'

const SingleRstaurant = () => {
    const { id } = useParams()
    const [restaurantCategory, setRestaurantCategory] = useState([]);
    const [restaurant, setRestaurant] = useState({});
    const [cartSummary, setCartSummary] = useState({ items: 0, amount: 0 });
    const [products, setProducts] = useState([]);





    const num = Number(id)
    const token = localStorage.getItem('BearToken')





    useEffect(() => {
        const getSingleRestaurant = async () => {
            try {
                const response = await axiosinstance.get(`single/rest/${num}/`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                console.log(response)
                setRestaurantCategory(response.data.food_categories);
                setRestaurant(response.data.store);
                setProducts(response.data.product_with_quantities)
                setCartSummary({ items: response.data.items, amount: response.data.amount });
            } catch (error) {
                console.log(error)
            }
        }
        getSingleRestaurant()
    }, [])






    return (
        <div>
            <section className="py-10 lg:px-[25%]">
                <section className="wrapper">
                    <div className="rounded-lg shadow-lg border p-5">
                        <a href="" className="flex justify-start items-start">
                            <img src={restaurant.image} alt="" className="w-[40%] md:w-[30%] rounded-lg mr-6" />
                            <div className="w-[60%] md:w-[70%]">
                                <h3 className="text-[#515151] text-[16px] font-semibold mb-2">{restaurant.name}</h3>
                                <p className="text-[#515151] text-[12px]">{restaurant.tagline}</p>
                                <div className="flex justify-start items-center mt-5 mb-3">
                                    <span className="flex justify-start items-center text-[#515151] text-[14px] font-semibold mr-4">
                                        <img src={star} alt="image" className="w-[16px] mr-2" />
                                        {restaurant.rating}
                                    </span>
                                    <span className="flex justify-start items-center text-[#515151] text-[14px] font-semibold">
                                        <img src={clock} alt="image" className="w-[16px] mr-2" />
                                        {restaurant.time} min
                                    </span>
                                </div>
                                <span className="flex justify-start items-center text-red-600 text-[10px] md:text-[13px] font-semibold">
                                    <img src={discount} alt="" className="w-[13px] mr-2" />
                                    {restaurant.offer}
                                </span>
                            </div>
                        </a>
                    </div>
                </section>
            </section>



            <section className="py-10 lg:px-[25%] mb-14 lg:mb-0">
                <section className="wrapper">
                    {restaurantCategory.map((category, index) => (
                        category.fooditem.length !== 0 && (
                            <div className="border-b-4 mb-12" key={index}>
                                <h2 className="text-[#515151] text-[20px] font-bold p-5">{category.name}</h2>

                                {products.map((item, itemIndex) => (
                                    item.product.categry == category.id && (
                                        <div className="border-b p-5" key={itemIndex}>
                                            <div className="flex justify-between items-start">
                                                <div className="w-[60%] md:w-[75%]">
                                                    {item.product.is_veg ?
                                                        <img src={veg} alt="" className="w-[14px]" />
                                                        :
                                                        <img src={non} alt="" className="w-[14px]" />
                                                    }

                                                    <h3 className="text-[#515151] text-[16px] font-bold mb-1">{item.product.name}</h3>
                                                    <p className="text-[#515151] text-[16px] font-semibold mb-5">₹ {item.product.price}</p>

                                                    {item.quantity ? (
                                                        <div key={id} className="rounded-lg flex ">
                                                            <a href="" className="w-[30px] h-[34px] text-center py-[3px] bg-[#2AC489] rounded-s-lg text-white font-semibold">-</a>
                                                            <span className="text-center w-6 border-b pb-1 border-t pt-1 ">{item.quantity}</span>
                                                            <a href="" className="w-[30px] h-[34px] text-center py-[3px] bg-[#2AC489] rounded-e-lg text-white font-semibold">+</a>
                                                        </div>
                                                    )
                                                        : (
                                                            <a href="">
                                                                <button className="text-[12px] text-white font-semibold rounded-md border-2 py-[2px] px-3 bg-[#2AC489]">ADD</button>
                                                            </a>
                                                        )}


                                                </div>
                                                <div className="w-[40%] md:w-[20%]">
                                                    <img src={item.product.image} alt="" className="w-full shadow-lg rounded-lg mr-6" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}

                            </div>
                        )
                    ))}






                    {cartSummary.items !== 0 && (
                        <div className="bg-red-500 px-4 rounded-xl h-[50px] flex justify-between items-center">
                            <p className="text-[16px] text-white font-semibold">{cartSummary.items} item | ₹ {cartSummary.amount}</p>
                            <a href="" className="flex justify-start items-center">
                                <p className="text-[16px] text-white font-semibold mr-3">View Cart</p>
                                <ShoppingCart className="w-[18px] text-white" />
                            </a>
                        </div>
                    )}

                </section>
            </section>
        </div>
    )
}

export default SingleRstaurant
