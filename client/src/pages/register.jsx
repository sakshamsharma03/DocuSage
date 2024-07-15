import React, { useState } from 'react'
import axios from "axios";

const Signup = () => {
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })

  const handleData=(e)=>
    {
   const {name,value}=e.target;
   setData((prevData)=>({
    ...prevData,
    [name]:value,
   }))
    }
    const handleSubmit=async(e)=>
      {
        e.preventDefault();
        try {
          if (data.name && data.email && data.password) {
            // Send the data using Axios POST
            const response = await axios.post('http://localhost:4000/create', data);
            console.log('Response:', response.data);
    
            // Reset the form after successful submission
            setData({
              name: "",
              email: "",
              password: "",
            });
            
            //console.log('Form reset:', data);
          } else {
            console.log('Please fill in all fields');
          }
        } catch (error) {
          console.error( error);
        }
      }
  return (
    <div className='bg-zinc-900 w-full min-h-screen text-white text-xl '>
        <div className='flex flex-col w-full min-h-screen justify-center items-center'>
        <h2 className='mb-5 text-2xl tracking-tighter	'>Sign up </h2>
        <form action="" method='post' onSubmit={handleSubmit} className=' flex flex-col gap-y-5'>
            <input type="text" onChange={handleData}  value={data.name} className='bg-zinc-700 rounded-md px-3 py-2 outline-none' name='name' placeholder='Name' />
            <input type="email" onChange={handleData}  value={data.email} className='bg-zinc-700 rounded-md px-3 py-2 outline-none' name='email' placeholder='Email' />
            <input type="password" onChange={handleData}  value={data.password} className='bg-zinc-700 rounded-md px-3 py-2 outline-none' name='password' placeholder='Password' />
            <input type="submit" className=' bg-blue-400 cursor-pointer rounded-md text-xl px-3 py-2' value="submit"/>
        </form>
        </div>
    </div>
  )
}

export default Signup