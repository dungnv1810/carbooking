"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import DarkMode from './DarkMode';

import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import { usePathname } from 'next/navigation';

export const Navlinks = [
    {
        id: 1,
        name: "HOME",
        link: "/",
    },
    {
        id: 2,
        name: "ABOUT",
        link: "/about",
    },
    {
        id: 3,
        name: "FESTURES",
        link: "/festures",
    },
    {
        id: 4,
        name: "BLOG",
        link: "/blog",
    },
    {
        id: 5,
        name: "CONTACT",
        link: "/contact",
    },
];

const NavBar = () => {
    const pathname = usePathname();

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className='relative z-10 shadow-md
        w-full dark:bg-black dark:text-white
        duration-300'>
            <div className='container py-2 md:py-0'>
                <div className='flex items-center justify-between'>
                    {/* Logo section */}
                    <Link href="/" className='text-3xl font-bold'>
                        <span>Cab</span>
                        <span className='text-primary'>Hub</span>
                    </Link>
                    {/* Desktop menu section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6'>
                            {
                                Navlinks.map(({id, name, link})=>{
                                    const isActive = pathname === link;
                                    return(
                                        <li 
                                        key={id} 
                                        className='py-4'>
                                            <Link 
                                            href={link}
                                            className={`${isActive ? "bg-primary dark:text-black" 
                                            : ""}
                                            text-lg font-medium
                                            text-black dark:text-white py-2 px-4 rounded-full
                                            hover:bg-primary duration-300`}>
                                                {name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            {/* DarkMode feature implement */}
                            <DarkMode/>
                        </ul>
                    </div>
                    {/* Mobile Menu section */}
                    <div className='md:hidden flex items-center
                    gap-4 '>
                        <DarkMode/>
                        {
                            showMenu ? (
                                <HiMenuAlt1
                                onClick={toggleMenu}
                                className='cursor-pointer transition-all'
                                size={30}/>
                            ) : (
                                <HiMenuAlt3
                                onClick={toggleMenu}
                                className='cursor-pointer transition-all'
                                size={30}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            <ResponsiveMenu 
                showMenu={showMenu} 
                toggleMenu={toggleMenu}
            />
        </nav>
    )
}

export default NavBar
