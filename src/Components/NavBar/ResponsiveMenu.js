import React from 'react';
import Link from 'next/link';

import { FaUserCircle } from "react-icons/fa";
import  { Navlinks }  from "./NavBar";

const ResponsiveMenu = ({showMenu, toggleMenu}) => {
    return (
        <>
            <div className={`${showMenu ? "left-0" : "-left-[100%]"}
            fixed top-0 bottom-0 z-20 flex h-screen w-[75%] flex-col
            justify-between bg-white dark:bg-dark dark:text-white
            px-8 pb-6 pt-16 text-black duration-300 md:hidden 
            rounded-r-xl shadow-md`}>
                <div className=''>
                    {/* User top */}
                    <div className='flex items-center justify-start gap-3'>
                        <FaUserCircle 
                        className='text-5xl'/>
                        <div>
                            <h1>Hellow User</h1>
                            <h1 className='text-sm text-slate-500'>Premium User</h1>
                        </div>
                    </div>
                    {/* Navigation links section */}
                    <nav className='mt-12'>
                        <ul className=''>
                            {
                                Navlinks.map(({id, link, name})=>{
                                    return(
                                        <li key={id} className='py-4'>
                                            <Link 
                                            href={link}
                                            className={`text-lg font-medium
                                            text-black dark:text-white duration-300`}>
                                                {name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
                {/* Bottom footer  */}
                <div className='footer'>
                    <h1>
                        Made with Love By <a href='https://dilshad-ahmed.github.io/'>Dilshad</a>{""}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default ResponsiveMenu;
