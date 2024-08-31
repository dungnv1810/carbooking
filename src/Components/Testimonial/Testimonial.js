import React from 'react';
import Slider from 'react-slick';

import BgImage from '../../assets/testimonial.png';

const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
}

const testimonialData = [
    {
        id:1,
        name: "Dilshad",
        image: "https://picsum.photos/101/101",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id:2,
        name: "Sabir ali",
        image: "https://picsum.photos/102/102",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id:3,
        name: "Dipankar kumar",
        image: "https://picsum.photos/103/103",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id:4,
        name: "Sabir",
        image: "https://picsum.photos/104/104",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id:5,
        name: "Satya Narayan",
        image: "https://picsum.photos/105/105",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
];

const Testimonial = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div style={bgStyle}>
            <div className='bg-white/80 dark:bg-gray-800/90
            py-14 dark:text-white'>
                <div className='container'>
                    {/* Header section */}
                    <div className='mb-10 text-center'>
                        <h1 className='text-4xl font-bold'>
                            Testimonial
                        </h1>
                    </div>
                    {/* Testimonial cards section */}
                    <div
                    data-aos='zoom-in'
                    className=''
                    >
                        <Slider {... settings}>
                            {
                                testimonialData.map(({id, name, text, image})=>{
                                    return(
                                        <div 
                                        key={id}
                                        className='my-6'>
                                            <div
                                            className='flex flex-col gap-6 shadow-lg
                                            py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark
                                            relative'>
                                                {/* Content section */}
                                                <div
                                                className='flex flex-col items-center gap-4'
                                                >
                                                    <p className='text-xl'>
                                                        {text}
                                                    </p>
                                                </div>
                                                {/* Images section */}
                                                <div className='flex items-center gap-4'>
                                                    <img
                                                    src={image}
                                                    alt={name}
                                                    className='rounded-full w-16 h-16'
                                                    />
                                                    <div className='space-y-2'>
                                                        <h1 className='text-xl font-bold text-black/60
                                                        dark:text-primary font-cursive'>
                                                            {name}
                                                        </h1>
                                                        <p className='text-sm font-bold text-black/45
                                                        dark:text-white'>
                                                            Developer
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
