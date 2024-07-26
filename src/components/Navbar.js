import React, { useState } from 'react';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  //const [isHiring, setIsHiring] = useState(false);

  const handleMenuToggler = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="max-w-screen-2xl container mx-auto h-10">
      <nav className="bg-[#efefef] flex justify-between items-center  ">
        <div className="container mx-auto flex justify-between items-center ">
          <div className='flex items-center gap-2 text-2xl pl-10 hover:cursor-pointer'>
            <img
              decoding="async"
              sizes="113px"
              srcSet="
                https://framerusercontent.com/images/9s7xCxVbyxU7bDKz9QYjAybc4f8.svg?scale-down-to=512 512w,
                https://framerusercontent.com/images/9s7xCxVbyxU7bDKz9QYjAybc4f8.svg 949w
              "
              src="https://framerusercontent.com/images/9s7xCxVbyxU7bDKz9QYjAybc4f8.svg?scale-down-to=512"
              alt="AI Lawyer logo"
              className="w-28 h-28  rounded object-center object-contain"
            />
          </div>

          <div
            className={`px-3 text-base flex flex-col items-center justify-center gap-3 py-5 rounded-sm ${isMenuOpen ? "" : "hidden"
              }`}
          >

          </div>

          <ul className="hidden md:flex flex items-center justify-center text-slate-500  gap-10 
          font-sans text-base">
            <li>
              <a href="#" className=" hover:underline text-base">FAQ</a>
            </li>
            <li>
              <a href="#" className=" hover:underline text-base">Affiliate</a>
            </li>
            <li>
              <a href="#" className=" hover:underline text-base">Pricing</a>
            </li>
            <li>
              <a href="#" className=" hover:underline text-base">Blog</a>
            </li>
            <li>
              <a href="#" className=" hover:underline text-base">Contact</a>
            </li>

          </ul>
          <button className='mr-10 hidden lg:block text-black bg-yellow-400  hover:bg-yellow-200 drop-shadow-xl py-2 px-4 rounded-2xl'>
            Try for free
          </button>


          <div className="md:hidden block mr-10">
            <button onClick={handleMenuToggler}>
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5 text-primary m-20" />
              ) : (
                <FaBarsStaggered className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>


          <div className={`lg:hidden fixed top-[4rem] left-0 w-full bg-[#efefef] z-10 ${isMenuOpen ? "" : "hidden"
            }`}>
            <ul className="flex flex-col items-center gap-2 py-4 text-slate-500">
              <li><a href="#" className="text-lg hover:underline text-base py-2">FAQ</a></li>
              <li><a href="#" className="text-lg hover:underline text-base py-2">Affiliate</a></li>
              <li><a href="#" className="text-lg hover:underline text-base py-2">Pricing</a></li>
              <li><a href="#" className="text-lg hover:underline text-base py-2">Blog</a></li>
              <li><a href="#" className="text-lg hover:underline text-base py-2">Contact</a></li>
              <li>
                <button className="w-32 h-10 bg-yellow-400 text-black hover:bg-yellow-200 drop-shadow-xl py-2 px-4 rounded-2xl mt-4">
                  Try for free
                </button>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
