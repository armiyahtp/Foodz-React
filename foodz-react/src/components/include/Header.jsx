import React, { useState } from 'react'
import { House, LogOut, MapPin, Search, ShoppingCart, User } from 'lucide-react';
import logo from '/images/logo.png'
import { useSign } from '../../context/SignContext';

const Header = () => {

    const { showRegister, showLogin } = useSign()

    const [lgtogle, setLgTogle] = useState("lg-togle-box")
    const [btnOne, setBtnOne] = useState("btn")
    const [btnTwo, setBtnTwo] = useState("btn active")



    const addLgTogle = () => {
        setLgTogle("lg-togle-box active")
        setBtnOne("btn active")
        setBtnTwo("btn")
    }

    const removeLgTogle = () => {
        setLgTogle("lg-togle-box")
        setBtnOne("btn")
        setBtnTwo("btn active")
    }
    return (
        <div>
            <header className="h-[80px] shadow-md">
                <section className="wrapper h-full flex justify-between items-center">
                    <div>
                        <img src={logo} alt="" className="w-[90px]" />
                    </div>

                    <div className="hidden lg:block">
                        <ul className="flex items-center">
                            <li className="mr-7"><a href="" className="flex justify-start items-center text-[#515151] text-[18px]"><House className="w-[18px] mr-2"/>Home</a></li>
                            <li className="mr-7"><a href="#" className="flex justify-start items-center text-[#515151] text-[18px]"><Search className="w-[18px] mr-2"/>Search</a></li>
                            <li className="mr-7"><a href="" className="flex justify-start items-center text-[#515151] text-[18px]"><ShoppingCart className="w-[18px] mr-2"/>Cart</a></li>
                            <li><a href="" className="flex justify-start items-center text-[#515151] text-[18px]"><User className="w-[18px] mr-2"/>Account</a></li>
                        </ul>
                    </div>

                    <div className="flex justify-start items-center">
                        <a href="" className="flex justify-start items-center mr-8">
                            <MapPin className="w-[18px] mr-3"/>
                            <p className="text-[#515151] text-[18px] pb-1 border-b-2 border-yellow-400">Tirur, Malappuram</p>
                        </a>
                        <div className='hidden lg:flex bg-[#f1f8ff] z-10 shadow-inner rounded-md p-1 ml-4'>
                            <div className={`${lgtogle} shadow -z-10`}></div>
                            <button onClick={showLogin} onMouseEnter={removeLgTogle} className={`btn1 px-6 py-[9px] ${btnTwo} rounded-md`}>Sign In</button>
                            <button onClick={showRegister} onMouseEnter={addLgTogle} className={`px-6 py-[9px] ${btnOne} rounded-md`}>Sign Up</button>
                        </div>
                    </div>

                </section>
            </header>
        </div>
    )
}

export default Header
