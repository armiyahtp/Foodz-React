import { useEffect, useState } from "react"
import { axiosinstance } from "../config/axios"
import clock from '/images/clock.png'
import star from '/images/star.png'


const Cart = () => {
    const [store, setStore] = useState({})
    const [carts, setCarts] = useState([])
    const [address, setAddress] = useState({})
    const [caartBill, setCartBill] = useState({})
    const [prices, setPrices] = useState({ sub_total: 0, total: 0 })


    const token = localStorage.getItem('BearToken')

    useEffect(() => {
        const getCart = async () => {
            try {
                const response = await axiosinstance.get('cart/', {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setStore(response.data.store)
                setCarts(response.data.carts)
                setAddress(response.data.selected_address)
                setCartBill(response.data.cart_bill)
                setPrices({ sub_total: response.data.sub_total, total: response.data.total })
            } catch (error) {
                console.log(error)
            }
        }
        getCart()
    }, [])
    return (
        <div>

            <section className="py-10 lg:px-[25%]">
                <section className="wrapper">
                    <div className="rounded-lg shadow-lg border p-5">
                        <a href="" className="flex justify-start items-start">
                            <img src={store.image} alt="" className="w-[40%] md:w-[30%] rounded-lg mr-6" />
                            <div className="w-[60%] md:w-[70%]">
                                <h3 className="text-[#515151] text-[16px] font-semibold mb-2">{store.name}</h3>
                                <p className="text-[#515151] text-[12px]">{store.tagline}</p>
                                <div className="flex justify-start items-center mt-5 mb-3">
                                    <span className="flex justify-start items-center text-[#515151] text-[14px] font-semibold mr-4">
                                        <img src={star} alt="image" className="w-[16px] mr-2" />
                                        {store.rating}
                                    </span>
                                    <span className="flex justify-start items-center text-[#515151] text-[14px] font-semibold">
                                        <img src={clock} alt="image" className="w-[16px] mr-2" />
                                        {store.time} min
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
            </section>



            <section className="py-10 lg:px-[25%] mb-14 lg:mb-0">
                <section className="wrapper">
                    <div className="rounded-lg shadow-md border p-5 mb-5">
                        <h2 className="text-[#515151] text-[16px] font-semibold border-b pb-2">ITEM IN CART</h2>
                        {carts.map((cart, cartIndex) => (
                            <div key={cartIndex} className="mt-3 flex justify-between items-center border-b pb-2 mb-3">
                                <div className="">
                                    <p className="text-[#515151] text-[14px] font-semibold">{cart.product.name}</p>
                                    <p className="text-[14px] font-bold">₹ {cart.amnt}</p>
                                </div>
                                <div className="border rounded-lg md:mr-24">
                                    <a href=""><button className="py-2 px-3 bg-[#2AC489] rounded-s-lg text-white font-semibold">-</button></a>
                                    <span className="ml-3 mr-3">{cart.qty}</span>
                                    <a href=""><button className="py-2 px-3 bg-[#2AC489] rounded-e-lg text-white font-semibold">+</button></a>
                                </div>
                            </div>
                        ))}
                    </div>



                    <div className="rounded-lg shadow-md border p-5 mb-5">
                        <div className="mt-3 flex justify-between items-center border-b pb-5 mb-3">
                            <div className="">
                                <input type="text" placeholder="Coupen Code" className="text-[16px] font-semibold border-none outline-none" />
                            </div>
                            <div className="rounded-lg">
                                <button className="py-2 px-8 md:px-12 bg-[#2AC489] rounded-lg mr-5 text-white font-semibold">Apply</button>
                            </div>
                        </div>

                        <div className="mt-3 flex justify-start items-center mb-2">
                            <img src="" alt="" className="w-[19px] mr-4" />
                            <a href="" className=""><p className="text-red-500 font-bold">View All Offers</p></a>
                        </div>
                    </div>




                    <div className="rounded-lg shadow-md border p-5 mb-5">
                        <h2 className="text-[#515151] text-[16px] font-bold">BILL DETAILS</h2>
                        <div className="mt-3 flex justify-between items-center border-b pb-2 mb-3">
                            <p className="text-[#515151] text-[14px] font-semibold">Item Total</p>
                            <p className="text-[14px] font-bold text-[#515151]">₹ </p>
                        </div>

                        <div className="mt-3 flex justify-between items-center border-b pb-2 mb-3">
                            <p className="text-[#515151] text-[14px] font-semibold">Offer Applied</p>
                            <p className="text-[14px] font-bold text-[#515151]">-₹ </p>
                        </div>

                        <div className="mt-3 flex justify-between items-center border-b pb-2 mb-3">
                            <p className="text-[#515151] text-[14px] font-semibold">Delivery Charges (4km)</p>
                            <p className="text-[14px] font-bold text-[#515151]">₹ </p>
                        </div>

                        <div className="mt-3 flex justify-between items-center mb-3">
                            <p className="text-[14px] font-semibold">To Pay</p>
                            <p className="text-[14px] font-bold">₹ </p>
                        </div>
                    </div>




                    <div className="rounded-lg shadow-md border p-5 mb-5">
                        <div className="mt-3 border-b pb-5 mb-3">
                            <p className="text-[#515151] font-bold">DELIVER TO</p>
                        </div>

                        <div className="mt-3 flex justify-between items-center mb-3">
                            <div className="">
                                <p className="text-[#515151] text-[16px] font-semibold"></p>
                            </div>
                            <a href="" className="rounded-lg">
                                <button className="py-2 px-6 md:px-12 bg-[#2AC489] rounded-lg mr-5 text-white font-semibold">CHANGE</button>
                            </a>
                        </div>
                    </div>

                    <a href="" className="bg-red-500 px-4 rounded-xl h-[50px] flex justify-center items-center mb-6 cursor-pointer">
                        <p className="text-[16px] text-white font-semibold">CONTINUE</p>
                    </a>

                    <div className="mt-5 flex justify-between items-center rounded-lg shadow-md border p-5 mb-5">
                        <div className="">
                            <p className="text-[#515151] text-[16px] font-semibold">Add address</p>
                        </div>
                        <a href="" className="rounded-lg">
                            <button className="py-2 px-6 md:px-12 bg-[#2AC489] rounded-lg mr-5 text-white font-semibold">ADD</button>
                        </a>
                    </div>

                    <a href="" className="bg-red-500 px-4 rounded-xl h-[50px] flex justify-center items-center mb-6 cursor-not-allowed">
                        <p className="text-[16px] text-[#b6b4b4] font-semibold">CONTINUE</p>
                    </a>








                </section>
            </section>
        </div>
    )
}

export default Cart
