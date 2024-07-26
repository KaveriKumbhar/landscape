import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className='mt-20 max-w-screen-2xl container mx-auto flex flex-col justify-center gap-y-38 pt-10'>
      <div className='container mx-auto flex items-center justify-center mt-18 '>
        <a className='flex justify-center gap-3 bg-[#1c1c1c] text-white p-1 rounded-2xl text-14 hover:cursor-pointer text-sm font-sans'>
          <div className='bg-[#00c82c] p-1 rounded-xl'>
            <p>New</p>
          </div>
          <div className='flex justify-center gap-3 items-center'>
            <p>Become a Distributor</p>
            <FaArrowRight className='text-emerald-500' />
          </div>
        </a>
      </div>

      <div className='pt-1 mt-10 flex flex-col justify-center items-center text-7xl gap-2'>
        <h1 className='text-black font-sans'>
          <b>
            <span className='text-[#AD2FFB]'>AI Lawyer </span>
            : your personal
          </b>
        </h1>
        <h1 className='text-black font-sans'>
          <b>legal AI assistant</b>
        </h1>
      </div>

      <div className='mt-10 flex justify-center items-center pt-5 text-base relative'>
        <div className='flex justify-center items-center max-w-lg'>
          <div className='flex flex-col items-center gap-2 relative'>
            <span className='flex items-center gap-2 relative'>for
              <h2 className='text-[#AD2FFB] font-sans'> Consumers</h2></span>
            <p className='text-center text-[#767575]'>Say goodbye to expensive legal consultation,
              long waits for appointments, and confusing legal texts.</p>
          </div>
          <div className='mx-4 flex flex-col border-solid border-black border-l-2 h-28'></div> {/* This is the line */}
          <div className='flex flex-col items-center gap-2 relative'>
            <span className='flex items-center gap-2 relative'>for
              <h2 className='text-[#2F43FB] font-sans'> Lawyers</h2></span>
            <p className='text-center text-[#767575]'>Say goodbye to routine tasks. AI Lawyer automates your legal research
              and paperwork, granting you more free time.
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center mt-10 w-64'>
          <button className='hidden lg:block text-black bg-yellow-400 hover:bg-yellow-200 drop-shadow-xl py-2 px-4 rounded-2xl'>
            Try for free
          </button>
          <div className='relative flex justify-center mt-10' style={{ width: '120px' }}>
            <img src='https://framerusercontent.com/images/qu3p1CVTcA51hxcrHdp0kWGBv8.png' alt='Person 1' className='rounded-full w-12 h-12 absolute' style={{ left: '0%' }} />
            <img src='https://framerusercontent.com/images/2mXcwauLEfvaNQkLjPpPYVVtos.png' alt='Person 2' className='rounded-full w-12 h-12 absolute' style={{ left: '25%' }} />
            <img src='https://framerusercontent.com/images/TYo9warB47QIM9Qv6K0p163790.png' alt='Person 3' className='rounded-full w-12 h-12 absolute' style={{ left: '50%' }} />
            <img src='https://framerusercontent.com/images/YLdNx7Ji8qI3mK9gRdUlSiNUbHc.png' alt='Person 4' className='rounded-full w-12 h-12 absolute' style={{ left: '75%' }} />
          </div>
          <p className='flex items-center justify-center mt-12 text-[#767575] text-sm font-sans'>***** 5 stars from 256 users</p>
        </div>
      </div>
    </div>
  )
}

export default Home
