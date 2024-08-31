"use client";
import React from 'react';
import Image from 'next/image';

import CarBooking from "../../assets/carbooking.png";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
    return (
        <div className='bg-[#f5f5f5] dark:bg-black'>
            <div className='container'>
                {/* header title section */}
                <div className='uppercase space-y-3 text-center py-14'>
                    <p 
                    data-aos='fade-up'
                    className='text-primary text-2xl font-semibold'
                    > 
                        Donwload</p>
                    <h1
                    data-aos='fade-up'
                    data-aos-delay='300'
                    className='text-3xl font-bold'
                    >Best Cab Service</h1>
                </div>
                {/* Images section */}
                <div className='grid grid-cols-1 gap-4 place-items-center 
                sm:grid-cols-2'>
                    {/* Text content section */}
                    <div className='space-y-8 max-w-[400px] mx-auto'>
                        <h1 className='text-2xl font-bold'>
                            Donwload the Cab voucher app free! Get
                            Exciting New Offers
                        </h1>
                        <p>
                            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </p>
                        {/*App store logo section */}
                        <div className='flex flex-wrap justify-center
                        sm:justify-start items-center'>
                            <a href='#'>
                                <Image
                                src={AppStoreImg}
                                alt=''
                                className='max-w-[150px] sm:max-w-[120px]
                                md:max-w-[200px]'
                                />
                            </a>
                            <a href='#'>
                                <Image
                                src={PlayStoreImg}
                                alt=''
                                className='max-w-[150px] sm:max-w-[120px]
                                md:max-w-[200px]'
                                />
                            </a>
                        </div>
                    </div>
                    {/* Images section */}
                    <div>
                        <Image
                        src={CarBooking}
                        alt=''
                        className='max-w-[400px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppStore
