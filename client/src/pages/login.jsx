import React from 'react'

const Login = () => {
  return (
    <div className='bg-zinc-900 w-full min-h-screen text-white text-xl '>
        <div className='flex flex-col w-full min-h-screen justify-center items-center'>
        <h2 className='mb-5 text-2xl tracking-tighter	'>Login </h2>
        <form action="" className=' flex flex-col gap-y-5'>
            <input type="email" className='bg-zinc-700 rounded-md px-3 py-2 outline-none' name='email' placeholder='Email' />
            <input type="password" className='bg-zinc-700 rounded-md px-3 py-2 outline-none' name='password' placeholder='Password' />
            <input type="submit" className=' bg-blue-400 rounded-md text-xl px-3 py-2' value="submit"/>
        </form>
        </div>
    </div>
  )
}

export default Login