// src/components/Header.jsx
import { IoMdSearch } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../assets/medmax-logo.png';
import React from 'react';
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
    return (
        <header className="">
            <div className="topbar bg-[#00AEEF] text-white hidden lg:block py-1.5">
                <div className="topbar flex space-x-10 items-center justify-center">
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda.</p>
                    <button className="cursor-pointer bg-[#284469] text-white px-4 py-1 rounded-md hover:bg-white hover:text-[#284469] transition-colors duration-300 ease-in-out">Get Licence</button>
                </div>
            </div>
            <div className="middle">
                <div className="headerlogo flex items-center justify-between px-5  ">
                    <div className="mobile-menu-opener lg:hidden text-4xl text-[#284469] "><IoMenuOutline /></div>
                    <div className="logo lg:hidden"><img className="h-5" src={logo} alt="" /></div>
                    <div className="left hidden lg:block">
                        <div className="px-5 py-8 hidden lg:block"><img className="h-8" src={logo} alt="" /></div>
                    </div>
                    <div className="right hidden lg:flex space-x-4 ">
                        <div className="contact-info items-center">
                            <div className="flex flex-col"><FaPhoneAlt className="text-2xl" />
                                <p className="text-sm font-bold ">Contact Us</p>
                                <p className="text-xs">+123 456 789 02</p>
                            </div>
                        </div>
                        <div className="contact-info items-center">
                            <MdOutlineMailOutline className="text-2xl flex flex-col" />
                            <p className="text-sm font-bold">Email</p>
                            <p className="text-xs">email@email.com</p>
                        </div>
                        <div className="contact-info items-center">
                            <button><IoIosArrowForward className="text-2xl flex flex-col" />
                                <p className="text-sm font-bold">Contact Us</p></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav px-2 py-2">
                <div className="right flex-col hidden lg:block">
                    <ul>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Doctors</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="left">
                <div className="mobile-menu-opener hidden lg:block text-4xl text-[#284469] "><IoMdSearch /></div>
                <div className="mobile-menu-opener hidden lg:block text-4xl text-[#284469] "><IoMenuOutline /></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
