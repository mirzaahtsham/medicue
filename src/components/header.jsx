// src/components/Header.jsx
import Logo from '../assets/medmax-logo.png';
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
                <div className="headerlogo flex">
                    <div className="mobile-menu-opener lg:hidden text-4xl text-[#284469] px-11 py-11"><IoMenuOutline />
                    <div className="logo"><img className="w-14" src="../assets/medmax-logo.png" alt="" /></div>
                    </div>
                    <div className="left">
                        <img src="../assets/medmax-logo.png" alt="" />
                    </div>
                    <div className="right hidden lg:relative lg:flex space-x-10 items-baseline justify-start ml-4">
                        <div className="email">email</div>
                        <div className="contact">conatct</div>
                        <div className="button">button</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
