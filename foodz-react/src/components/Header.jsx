import React from 'react'
import '../style.css'
import { House, LogOut, MapPin, Search, ShoppingCart, User } from 'lucide-react';
import logo from '/images/logo.png'

const Header = () => {
    return (
        <div>
            <header className="h-[80px] shadow-md">
                <section className="wrapper h-full flex justify-between items-center">
                    <div>
                        <img src={logo} alt="" class="w-[90px]" />
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
                        <a href="">
                            <LogOut className="w-[18px]"/>
                        </a>
                    </div>

                </section>
            </header>
        </div>
    )
}

export default Header
