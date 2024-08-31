import React from 'react'
import { FaAndroid, 
    FaAppStoreIos, 
    FaFacebook, 
    FaGoogle, 
    FaInstagram, 
    FaMapMarker, 
    FaTwitter } from 'react-icons/fa'
import { MdCall, 
    MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='bg-white text-black dark:bg-black
        dark:text-white'>
            {/* Upper section Banner */}
            <div className='bg-primary'>
                <div className='container text-black text-center py-10
                lg:py-14 text-2xl font-bold space-y-4'>
                    <p className='uppercase'>
                        we are ready to take your call 24hours, 7 days
                    </p>
                    <h1 className='text-3xl md:text-5xl font-bold'>
                        +84 0345630366
                    </h1>
                </div>
            </div>
            {/* Botton Footer section */}
            <div className='container grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-10 md:gap-20 py-12'>
                {/* First column section */}
                <div className='space-y-6'>
                    {/* Heading */}
                    <h1
                    className='text-2xl py-2 font-bold uppercase
                    border-b-8 border-primary'>
                        About Cab Hub
                    </h1>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                    {/* Social link */}
                    <div className='flex items-center text-primary
                    gap-3 text-2xl'>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaGoogle/>
                        <FaTwitter/>
                    </div>
                </div>
                {/* Second column section */}
                <div className='space-y-6'>
                    {/* Heading */}
                    <h1
                    className='text-2xl py-2 font-bold uppercase
                    border-b-8 border-primary'>
                        Download
                    </h1>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                    <h1 className='text-primary text-xl font-semibold flex 
                    items-center gap-6'>
                        Android user {" "}
                        <span>
                            <FaAndroid
                            className='text-2xl text-black dark:text-white'
                            />
                        </span>
                    </h1>
                    <h1 className='text-primary text-xl font-semibold flex 
                    items-center gap-6'>
                        IOS user {" "}
                        <span>
                            <FaAppStoreIos
                            className='text-2xl text-black dark:text-white'
                            />
                        </span>
                    </h1>
                </div>
                {/* Third column section */}
                <div className='space-y-6'>
                    {/* Heading */}
                    <h1
                    className='text-2xl py-2 font-bold uppercase
                    border-b-8 border-primary'>
                        Contact
                    </h1>
                    {/* Social link */}
                    <div className='flex items-center gap-3'>
                        <FaMapMarker/>
                        123 Street, New York, USA
                    </div>
                    <div className='flex items-center gap-3'>
                        <MdCall/>
                        +84 034530366
                    </div>
                    <div className='flex items-center gap-3'>
                        <MdEmail/>
                        dungcoi459@gmail.com
                    </div>
                </div>
            </div>
            <div className='container text-center'>
                <p className='py-4 text-sm'>
                    Copyright @ 2024. All right reserved
                </p>
            </div>
        </div>
    )
}

export default Footer
