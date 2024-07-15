import React from 'react'
import Login from '../pages/login'
import Signup from '../pages/register'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-zinc-700 flex justify-around	 items-center sticky top-0 text-custom-gray w-screen h-20'>
        <header className=' text-5xl '>DocuSage</header>
        <div className='flex gap-7'>
        <Link className='text-3xl' href={<Login/>}>Login</Link>
        <Link className='text-3xl' href={<Signup/>}>Sign up</Link>
        </div>

    </div>
  )
}

export default Header