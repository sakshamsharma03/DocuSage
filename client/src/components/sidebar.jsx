import React, { useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import PdfReader from './PdfReader';
import { useTheme } from '../context/theme';

const SideBar = () => {
    const [theme, toggleTheme] = useTheme(); // 'light' or 'dark'

   

    return (
        <div className={`flex flex-col justify-between h-screen w-[400px] ${theme === 'light' ? 'bg-slate-50 text-black' : 'bg-gray-900 text-white'}`}>
            <div className='flex   justify-around items-center tracking-tighter   outline-none '>
                <h1>DocuSage</h1>
                <button onClick={toggleTheme}>
                    {theme === 'light' ? <FaMoon /> : <GoSun />}
                </button>
            </div>
            <div className='my-20 mx-20'>
            <PdfReader />
             </div>
        </div>
    )
}

export default SideBar;
