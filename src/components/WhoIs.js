import React from 'react'
import { FaUser } from 'react-icons/fa';
import { GoPeople } from "react-icons/go";
import { BsPersonCircle } from "react-icons/bs";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";

const WhoIs = () => {
    const cards = [
        {
            icon:<BsPersonCircle />,
            title: 'Card Title 1',
            paragraph: 'This is the paragraph for card 1.',
            imgSrc: 'https://via.placeholder.com/150',
        },
        {
            icon :<FaScaleUnbalanced/>,
            title: 'Card Title 2',
            paragraph: 'This is the paragraph for card 2.',
            imgSrc: 'https://via.placeholder.com/150',
        },
        {
            icon :<HiOutlineBuildingLibrary />,
            title: 'Card Title 3',
            paragraph: 'This is the paragraph for card 3.',
            imgSrc: 'https://via.placeholder.com/150',
        },
        {
            icon :<IoBookOutline/>,
            title: 'Card Title 4',
            paragraph: 'This is the paragraph for card 4.',
            imgSrc: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="container mx-auto py-40">
            {/* User div */}
            <div className="flex items-center justify-center gap-4 mb-8">

                <div className='flex flex-row justify-center items-center text-[#AD2FFB] border border-1 border-neutral-300 rounded-3xl px-2 py-1 gap-2 '>
                    {/* <img src="http://www.w3.org/2000/svg" alt="" className='text-[#AD2FFB]' /> */}
                    <GoPeople />
                    <h1 className="text-sm font-sans ">Users</h1>
                </div>


            </div>

            {/* Big title and small paragraph */}
            <div className="text-center mb-8 w-full flex flex-col justify-center">
                <h2 className="text-5xl font-bold font-sans mb-2">Who is AI Lawyer for?</h2>
                <p className="text-[#767575] font-sans p-2 max-w-xl mx-auto ">Our goal is simple: to make justice widely
                    available. Whether you're a consumer, practicing law, or studying it,
                    we're here for you. </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-white">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between">
                        <div>
                        {/* <BsPersonCircle /> */}
                        {card.icon}
                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                            <p className="text-gray-600 mb-4">{card.paragraph}</p>
                        </div>
                        <img src={card.imgSrc} alt={`Card ${index + 1}`} className="w-full h-32 object-cover rounded" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhoIs
