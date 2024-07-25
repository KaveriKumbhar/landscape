import React from 'react';
{/* <img decoding="async" sizes="113px" 
srcset="https://framerusercontent.com/images/9s7xCxVbyxU7bDKz9QYjAybc4f8.svg?scale-down-to=512 512w,
https://framerusercontent.com/images/9s7xCxVbyxU7bDKz9QYjAybc4f8.svg 949w" 
src="https://framerusercontent.com/images/9s7xCxVbyxU7bDKz9QYjAybc4f8.svg?scale-down-to=512" 
alt="AI Lawyer logo" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: contain; image-rendering: auto;"></img> */}
function Navbar() {
    // eslint-disable-next-line
  return (
    <header className="max-w-screen-2xl container mx-auto ">
    <nav className="bg-[#efefef]  flex justify-between items-center py-6">
      <div className="container mx-auto flex justify-between items-center min-h-32">
       <div className='flex items-center gap-2 text-2xl'>
       <img
                decoding="async"
                sizes="113px"
                srcSet="
                  https://framerusercontent.com/images/9s7xCxVbyxU7bDKz9QYjAybc4f8.svg?scale-down-to=512 512w,
                  https://framerusercontent.com/images/9s7xCxVbyxU7bDKz9QYjAybc4f8.svg 949w
                "
                src="https://framerusercontent.com/images/9s7xCxVbyxU7bDKz9QYjAybc4f8.svg?scale-down-to=512"
                alt="AI Lawyer logo"
                className="block w-full h-full rounded object-center object-contain"
              />
       </div>

        <ul className="flex items-center  text-slate-500 font-sans gap-40">
          <li>
            <a href="#" className="text-lg ">Home</a>
          </li>
          <li>
            <a href="#" className="text-lg ">About</a>
          </li>
          <li>
            <a href="#" className="text-lg ">Contact</a>
          </li>
          <li>
            <a href="#" className="text-lg ">FAQ</a>
          </li>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
        </ul>
       
      </div>
    </nav>
    </header>
  );
}

export default Navbar;