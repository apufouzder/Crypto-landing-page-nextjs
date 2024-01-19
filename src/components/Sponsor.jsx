"use client"
import Image from 'next/image';
import React from 'react';
import img1 from "../../public/1.png";
import img2 from "../../public/2.png";
import img3 from "../../public/3.png";
import img5 from "../../public/5.png";
import img7 from "../../public/7.png";
import Marquee from 'react-fast-marquee';

const Sponsor = () => {
    return (
        <section className='bg-[#162446] py-16'>
            <div className="container mx-auto">
                <>
                    <Marquee pauseOnClick={true} autoFill={true} className='gap-10'>
                        <Image className='md:mr-14 mr-8' src={img1} quality={100} alt='Sponsor' />
                        <Image className='md:mr-14 mr-8' src={img2} quality={100} alt='Sponsor' />
                        <Image className='md:mr-14 mr-8' src={img3} quality={100} alt='Sponsor' />
                        <Image className='md:mr-14 mr-8' src={img5} quality={100} alt='Sponsor' />
                        <Image className='md:mr-14 mr-8' src={img7} quality={100} alt='Sponsor' />
                    </Marquee>
                </>
            </div>
        </section>
    );
};

export default Sponsor;