import React from 'react';

import BgImages from "../../assets/girl.jpg";
import BannerCard from "./BannerCard.js";

import { SlStar } from "react-icons/sl";

const bgStyle = {
    backgroundImage: `url(${BgImages.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "520px",
}

const About = () => {
    return (
        <>
            <div style={bgStyle}>
                <div className='text-white bg-black/80 min-h-[530px]
                py-10 flex items-center'>
                    <div className='container'>
                        {/* Header title section */}
                        <div className='uppercase space-y-3 text-center
                        py-14'>
                            <p className='text-primary text-2xl
                            font-semibold'>We do Best</p>
                            <h1>Than You Wish</h1>
                        </div>
                        {/* Card section */}
                        <div className='grid grid-cols-1 sm:grid-cols-2
                        gap-8 '>
                            <div className='space-y-8'>
                                <BannerCard
                                title={"Fast Booking"}
                                description={
                                    "Lorem ipsum dolor sit amet consectetur adipisiccing elit"
                                }
                                icon={<SlStar/>}
                                />
                                <BannerCard
                                title={"Fast Booking"}
                                description={
                                    "Lorem ipsum dolor sit amet consectetur adipisiccing elit"
                                }
                                icon={<SlStar/>}
                                />
                            </div>
                            <div className='space-y-8'>
                                <BannerCard
                                title={"Fast Booking"}
                                description={
                                    "Lorem ipsum dolor sit amet consectetur adipisiccing elit"
                                }
                                icon={<SlStar/>}
                                />
                                <BannerCard
                                title={"Fast Booking"}
                                description={
                                    "Lorem ipsum dolor sit amet consectetur adipisiccing elit"
                                }
                                icon={<SlStar/>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
