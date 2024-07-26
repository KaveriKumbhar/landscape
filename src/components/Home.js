import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  return (
    <div className='mt-20 max-w-screen-2xl container mx-auto flex flex-col justify-center gap-y-10 pt-10 px-4 sm:px-6 lg:px-8 '>
      <div className='flex items-center justify-center '>
        <a className='flex flex-row sm:flex-row justify-center gap-3 bg-[#1c1c1c] text-white p-1  rounded-2xl text-sm hover:cursor-pointer font-sans border-2  border-[#d9d9d9]'>
          <div className='flex justify-center items-center bg-[#00c82c]  rounded-xl pl-2 pr-2'>
            <p>New</p>
          </div>
          <div className='flex justify-center gap-3 items-center'>
            <p>Become a Distributor</p>
            <FaArrowRight className='text-emerald-500' />
          </div>
        </a>
      </div>

      <div className=' flex flex-col justify-center items-center text-4xl sm:text-6xl lg:text-7xl gap-2'>
        <h1 className='text-black font-sans text-center'>
          <b>
            <span className='text-[#AD2FFB]'>AI Lawyer </span>
            : your personal
          </b>
        </h1>
        <h1 className='text-black font-sans text-center'>
          <b>legal AI assistant</b>
        </h1>
      </div>

      <div className=' flex flex-col sm:flex-row justify-center items-center pt-5 text-base'>
        <div className='flex flex-col sm:flex-row justify-center items-center max-w-lg'>
          <div className='flex flex-col items-center gap-2'>
            <span className='flex items-center gap-2'>for
              <h2 className='text-[#AD2FFB] font-sans'> Consumers</h2></span>
            <p className='text-center text-[#767575]'>Say goodbye to expensive legal consultation,
              long waits for appointments, and confusing legal texts.</p>
          </div>
          <div className='w-28 h-0.5 m-5 border-solid bg-black my-4 sm:my-0 sm:w-0.5 sm:h-28'></div> {/* This is the line */}
          <div className='flex flex-col items-center gap-2'>
            <span className='flex items-center gap-2'>for
              <h2 className='text-[#2F43FB] font-sans'> Lawyers</h2></span>
            <p className='text-center text-[#767575]'>Say goodbye to routine tasks. AI Lawyer automates your legal research
              and paperwork, granting you more free time.
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center mt-10 w-full sm:w-64'>
          <button className='hidden lg:block text-black bg-yellow-400 hover:bg-yellow-200 drop-shadow-xl py-2 px-4 rounded-2xl'>
            Try for free
          </button>

          <div className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center mt-10 w-full sm:w-64'>

              <div className='relative flex justify-center mt-5' style={{ width: '120px' }}>
                <img
                  src='https://framerusercontent.com/images/qu3p1CVTcA51hxcrHdp0kWGBv8.png'
                  alt='Person 1'
                  className='rounded-full w-12 h-12 absolute transition-transform duration-500 ease-in-out hover:-translate-y-4'
                  style={{ left: '0%' }}
                />
                <img
                  src='https://framerusercontent.com/images/2mXcwauLEfvaNQkLjPpPYVVtos.png'
                  alt='Person 2'
                  className='rounded-full w-12 h-12 absolute transition-transform duration-500 ease-in-out hover:-translate-y-4'
                  style={{ left: '25%' }}
                />
                <img
                  src='https://framerusercontent.com/images/TYo9warB47QIM9Qv6K0p163790.png'
                  alt='Person 3'
                  className='rounded-full w-12 h-12 absolute transition-transform duration-500 ease-in-out hover:-translate-y-4'
                  style={{ left: '50%' }}
                />
                <img
                  src='https://framerusercontent.com/images/YLdNx7Ji8qI3mK9gRdUlSiNUbHc.png'
                  alt='Person 4'
                  className='rounded-full w-12 h-12 absolute transition-transform duration-500 ease-in-out hover:-translate-y-4'
                  style={{ left: '75%' }}
                />
              </div>

            </div>
          </div>
          <p className='flex items-center justify-center mt-12 text-[#767575] text-sm font-sans'>***** 5 stars from 256 users</p>
        </div>
      </div>
    </div>


  )
}

export default Home
