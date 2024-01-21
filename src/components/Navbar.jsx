"use client";
import React, { useState } from 'react';
import Logo from "../../public/logo.png";
import HeaderPic from "../../public/headerIphone.png";
import headerBg from "../../public/headerBg.png";
import startIcon from "../../public/startIcon.png";
import arrowIcon from "../../public/Arrow_03.png";
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <header className='mb-4 lg:mb-0'>
                <nav className="relative container mx-auto flex justify-between items-center py-10">
                    <a className='flex text-xl font-medium items-end gap-2' href="/">
                        <Image width={35} height={35} quality={100} src={Logo} alt="Logo" />
                        Crypto
                    </a>
                    <ul className='hidden sm:flex flex-row items-center justify-between space-x-14 text-xl '>
                        <li>
                            <Link className='hover:text-primary transition-all duration-150 delay-100 ease-out active:font-semibold' href="">Home</Link>
                        </li>
                        <li>
                            <Link className='hover:text-primary transition-all duration-150 delay-100 ease-out' href="">About</Link>
                        </li>
                        <li>
                            <Link className='hover:text-primary transition-all duration-150 delay-100 ease-out' href="">Services</Link>
                        </li>
                        <li>
                            <Link className='hover:text-primary transition-all duration-150 delay-100 ease-out' href="">Events</Link>
                        </li>
                        <li>
                            <button className=' border border-light py-2 px-8 hover:bg-primary transition-all duration-150 delay-100 ease-in-out'>Sign In</button>
                        </li>
                    </ul>

                    <div className='mr-4 block sm:hidden'>
                        <span onClick={handleOpen} className='text-3xl transition-all duration-150 delay-100 ease-out cursor-pointer'>
                            {open ? <RxCross1 /> : <FiMenu />}
                        </span>
                    </div>

                    {/* Mobile menu */}
                    {open && <ul style={{
                        background: "rgba( 18, 19, 42, 0.7 )",
                        boxShadow: "0 5px 20px 0 rgba( 31, 38, 135, 0.37 )",
                        backdropFilter: "blur( 17.5px )",
                        webkitBackdropFilter: "blur( 17.5px )",
                        borderRadius: "10px"
                    }} className='absolute top-20 bg-primary w-full flex flex-col items-center space-y-4 py-6 text-xl sm:hidden z-50'>
                        <li>
                            <Link className='hover:text-primary transition-all duration-150 delay-100 ease-out active:font-semibold' href="">Home</Link>
                        </li>
                        <li>
                            <Link className='hover:text-primary transition-all duration-150 delay-100 ease-out' href="">About</Link>
                        </li>
                        <li>
                            <Link className='hover:text-primary transition-all duration-150 delay-100 ease-out' href="">Services</Link>
                        </li>
                        <li>
                            <Link className='hover:text-primary transition-all duration-150 delay-100 ease-out' href="">Events</Link>
                        </li>
                        <li>
                            <button className=' border border-light py-2 px-8 hover:bg-primary transition-all duration-150 delay-100 ease-in-out'>Sign In</button>
                        </li>
                    </ul>}
                </nav>

                <section className='container mx-auto pt-14'>
                    <Image className='absolute top-4 left-0 -z-50' src={headerBg} alt="" />
                    <div className="grid  md:grid-cols-2 gap-12 justify-between items-center">
                        <div className='relative'>

                                <Image className='absolute right-16 -top-28' src={arrowIcon} alt="" />
                            
                            <h1 className='text-6xl lg:text-8xl'>Live And <br /> on-demand trading</h1>
                            <p className='text-secondary text-xl my-12'>Lorem ipsum dolor sit amet. Qui consequatur sint 33 volupta officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.</p>
                            <div className='flex space-x-8 items-center'>
                                <button className='text-xl border border-light py-3 px-10 hover:bg-primary transition-all duration-150 delay-100 ease-in-out'>Sign In</button>
                                <button className='text-xl border border-light py-3 px-10 hover:bg-primary transition-all duration-150 delay-100 ease-in-out'>Sign In</button>
                            </div>
                        </div>
                        <div className='relative'>
                            <Image className='absolute md:left-0 left-0 w-11 top-72 md:bottom-36' src={startIcon} alt="" />
                            
                            <Image className='w-full' quality={100} src={HeaderPic} alt="Iphone image" />
                            
                            <Image className='absolute lg:right-36 md:right-20 right-20 w-11 lg:top-4 top-0' src={startIcon} alt="" />
                            <Image className='absolute md:right-4 right-0 bottom-56' src={startIcon} alt="" />
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
};

export default Navbar;