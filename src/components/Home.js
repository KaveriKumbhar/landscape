import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <div className='mt-20 max-w-screen-2xl container mx-auto flex flex-col justify-center '>
      <div className='container mx-auto flex items-center justify-center pt-18 '>
        <a className='flex justify-center  gap-3 bg-[#1c1c1c] text-white p-1 rounded-2xl text-14 hover:cursor-pointer  text-sm font-sans'>
            <div className='bg-[#00c82c] p-1 rounded-xl'>
                <p>New</p>
            </div>
            <div className='flex justify-center gap-3 items-center'>
            <p>Beccome a Distributer</p>
            <FaArrowRight className='text-emerald-500'/>
            </div>
            
        </a>
      </div>

      <div className='pt-24 flex justify-center items-center'>
      <h1 className='text-fuchsia-600 text-4xl font-sans'><b>AI Lawyer  </b> </h1> 
      <h1 className='text-4xl font-sans'><b>: your personal
      legal AI assistant</b> </h1>

      </div>
    </div>
  )
}

export default Home
