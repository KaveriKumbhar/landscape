import React from 'react';
import { FaUser } from 'react-icons/fa';
import { GoPeople } from "react-icons/go";
import { BsPersonCircle } from "react-icons/bs";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";

const WhoIs = () => {
    const cards = [
        {
            icon: <BsPersonCircle />,
            title: 'AI for ',
            span: 'Legal Consumer',
            paragraph: 'From deciphering complex terms to understanding rights, we have got you covered.',
            imgSrc: 'https://framerusercontent.com/images/MnCpn4abG6da9dzhmWIiGbX3ug.png?scale-down-to=512',
        },
        {
            icon: <FaScaleUnbalanced />,
            title: 'AI ',
            span: 'Lawyers',
            paragraph: 'Let us handle the research and paperwork while you elevate client relationships.',
            imgSrc: 'https://framerusercontent.com/images/J7RSnxadoGrkoRLnldFXCwbrJ7Y.png?scale-down-to=512',
        },
        {
            icon: <HiOutlineBuildingLibrary />,
            title: 'AI for ',
            span: 'Law Firms',
            paragraph: 'Streamlining processes and boosting efficiency, we are revolutionising the way law firms operate',
            imgSrc: 'https://framerusercontent.com/images/ovkMIu63Sh3wgt0cz4HpINJD4.png?scale-down-to=512',
        },
        {
            icon: <IoBookOutline />,
            title: 'AI for ',
            span: 'Law Students',
            paragraph: 'We have made a perfect learning tool. It helps students prepare for a career in law.',
            imgSrc: 'https://framerusercontent.com/images/3RGh0i14WJV20WtKJRpNTA7En84.png?scale-down-to=512',
        },
    ];

    return (
        <div className="container mx-auto py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8">
            {/* User div */}
            <div className="flex items-center justify-center gap-4 mb-8">
                <div className='flex flex-row justify-center items-center text-[#AD2FFB] border border-1 border-neutral-300 rounded-3xl px-2 py-1 gap-2 '>
                    <GoPeople />
                    <h1 className="text-sm font-sans">Users</h1>
                </div>
            </div>

            {/* Big title and small paragraph */}
            <div className="text-center w-full flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans mb-2">Who is AI Lawyer for?</h2>
                <p className="text-[#767575] font-sans p-2 max-w-xl mx-auto">Our goal is simple: to make justice widely available. Whether you're a consumer, practicing law, or studying it, we're here for you.</p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-5 pr-8 pt-5 w-full justify-items-center">
    {cards.map((card, index) => (
        <div key={index} className="w-full bg-white p-6 shadow-lg flex flex-col justify-between items-center rounded-3xl">
            <div className='flex flex-col justify-center items-center gap-2'>
                {card.icon}
                <div className='flex flex-col justify-center items-center'>
                    <h5 className="text-xl sm:text-2xl font-semibold font-sans mb-2 text-center">
                        {card.title}
                        <span className='text-xl sm:text-2xl font-sans mb-2 text-[#AD2FFB]'>{card.span}</span>
                    </h5>
                </div>
                <p className="text-sm sm:text-base flex justify-center items-center font-sans leading-6 space-x-5 text-gray-600 mb-4 max-w-xl mx-auto text-center">
                    {card.paragraph}
                </p>
            </div>
            <img src={card.imgSrc} alt={`Card ${index + 1}`} className="w-full h-64 mt-3 object-cover rounded" />
        </div>
    ))}
</div>

        </div>
    );
}

export default WhoIs;
