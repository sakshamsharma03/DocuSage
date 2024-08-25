import React, { useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import PdfReader from './PdfReader';

const SideBar = () => {
    const [theme, setTheme] = useState('light'); // 'light' or 'dark'

    const handleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        // Apply the theme to the body
        document.body.className = theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white';
    }, [theme]);

    return (
        <div className={`flex flex-col justify-between h-screen w-[300px] ${theme === 'light' ? 'bg-slate-50 text-black' : 'bg-gray-900 text-white'}`}>
            <div className='flex   justify-around items-center tracking-tighter   outline-none '>
                <h1>DocuSage</h1>
                <button onClick={handleTheme}>
                    {theme === 'light' ? <FaMoon /> : <GoSun />}
                </button>
            </div>
            <div className='my-20 mx-20'>
            <PdfReader theme={theme}/>
             </div>
        </div>
    )
}

export default SideBar;
