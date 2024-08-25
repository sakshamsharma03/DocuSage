import React from 'react'

const PdfReader = ({theme}) => {
  return (
    <>
    <div>
       <button className={`rounded-md px-3 py-2 ${theme === 'light' ? 'bg-slate-300 text-black' : 'bg-blue-700  text-white'}`}>Upload Doc</button> 
    </div>
    </>
  )
}

export default PdfReader