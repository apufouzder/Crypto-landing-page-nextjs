import React from 'react';
import work from '../../public/howitwork.png';
import headerBg from "../../public/workBg.png";
import Image from 'next/image';

const HowItWork = () => {
    return (
        <section className='relative mb-24'>
            <Image className='absolute top-0 left-0 -z-50 h-full' src={headerBg} alt="" />
            <div className='container mx-auto'>
            
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
                <div>
                    <Image src={work} width="100%" quality={100} alt='Feature Image' />
                </div>
                    <div>
                        <h5 className='text-primary text-2xl font-bold mb-5'>How it works</h5>
                    <h1 className='text-light text-6xl font-medium leading-tight'>Viewing long- term and short -term forcast</h1>
                    <p className='text-secondary text-xl font-normal mt-8 mb-12'>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.</p>
                    <button className='text-xl font-semibold border border-light py-3 px-8 hover:bg-primary transition-all duration-150 delay-100 ease-in-out'>Explore Now</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default HowItWork;