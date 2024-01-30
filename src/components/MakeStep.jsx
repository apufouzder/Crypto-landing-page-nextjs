import React from 'react';
import { FiHeadphones, FiFilePlus } from "react-icons/fi";
import { GrLineChart } from "react-icons/gr";
import { MdOutlineDashboardCustomize, MdOutlineAllInbox } from "react-icons/md";
import { PiSelectionBackgroundLight } from "react-icons/pi";



const data = [
    {
        id: 1,
        title: "Support",
        desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.",
        icon: <FiHeadphones className='mx-auto' />,
    },
    {
        id: 2,
        title: "Sales",
        desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.",
        icon: <GrLineChart className='mx-auto' />,
    },
    {
        id: 3,
        title: "Onboarding",
        desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.",
        icon: <MdOutlineDashboardCustomize className='mx-auto' />,
    },
    {
        id: 4,
        title: "Product",
        desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.",
        icon: <MdOutlineAllInbox className='mx-auto' />,
    },
    {
        id: 5,
        title: "Quality",
        desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.",
        icon: <FiFilePlus className='mx-auto' />,
    },
    {
        id: 6,
        title: "Result",
        desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.",
        icon: <PiSelectionBackgroundLight className='mx-auto' />,
    },
];

const MakeStep = () => {
    return (
        <div className='container mx-auto py-20'>
            <div className='text-center mb-14'>
                <h1 className='text-6xl font-medium mb-8'>Make every step user-centric</h1>
                <p className='text-secondary text-lg mb-8'>Lorem ipsum dolor sit amet, consectetur adipis elit.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {data.map((item) => (
                    <div key={item.id} className='px-6 py-8 rounded-lg border border-primary text-center hover:translate-y-2 transition-all duration-500'>
                        <span className='text-5xl pt-6 block'>
                            {item.icon}
                        </span>
                        <h2 className='text-2xl font-semibold my-6'>{item.title}</h2>
                        <p className='text-base font-normal text-secondary'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MakeStep;