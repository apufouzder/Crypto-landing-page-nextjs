"use client";
import React, { useState } from 'react';
import Logo from "../../public/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
    console.log(open);
    return (
        <>
            <header className=''>
                <nav className="relative container mx-auto flex justify-between items-center py-6">
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
                    {open && <ul className='absolute top-20 bg-primary w-full flex flex-col items-center space-y-4 py-6 text-xl sm:hidden'>
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
            </header>
        </>
    );
};

export default Navbar;