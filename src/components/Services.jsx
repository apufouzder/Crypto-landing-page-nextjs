"use client"
import React from 'react';
import { FiEye } from 'react-icons/fi';
import { GiWallet } from "react-icons/gi";


const data = [
    {
        id: 1,
        title: "Connect wallet & exchanges",
        desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.",
        icon: <GiWallet className='mx-auto' />,
    },
    {
        id: 2,
        title: "Connect wallet & exchanges",
        desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.",
        icon: <FiEye className='mx-auto' />,
    },
    {
        id: 3,
        title: "Connect wallet & exchanges",
        desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.",
        icon: <GiWallet className='mx-auto' />,
    },
];

const Services = () => {

    return (
        <div className='container mx-auto py-20'>
            <div className='text-center'>
                <h1 className='text-6xl font-medium mb-8'>Automated portfolio tracking</h1>
                <p className='text-secondary text-lg mb-8'>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint <br /> laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {data.map((item) => (
                    <div key={item.id} className='px-6 py-8 rounded-lg border border-primary text-center hover:translate-y-2 transition-all duration-500'>
                        <span className='text-7xl pt-6 block'>
                            {item.icon}
                        </span>
                        <h2 className='text-3xl font-semibold my-6'>{item.title}</h2>
                        <p className='text-base font-normal'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;