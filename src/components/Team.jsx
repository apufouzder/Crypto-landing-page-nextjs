import React from 'react';
import team from '../../public/team.png';
import Image from 'next/image';


const Team = () => {
    return (
        <section className='container mx-auto mb-20'>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
                <div>
                    <h1 className='text-light text-6xl font-medium'>Invite team members & enlarge your groups</h1>
                    <p className='text-secondary text-lg font-normal mt-8 mb-12'>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.</p>
                    <button className='text-xl font-semibold border border-light py-3 px-8 hover:bg-primary transition-all duration-150 delay-100 ease-in-out'>Explore Now</button>
                </div>
                <div>
                    <Image src={team} className='w-full' quality={100} alt='Feature Image' />
                </div>
            </div>
        </section>
    );
};

export default Team;