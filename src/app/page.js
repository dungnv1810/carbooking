"use client";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from '@/Components/Hero/Hero';
import Contact from '@/Components/Contact/Contact';
import BestCabs from '@/Components/BestCabs/BestCabs';
import About from '@/Components/About/About';
import AppStore from '@/Components/AppStore/AppStore';
import Testimonial from '@/Components/Testimonial/Testimonial';
import Footer from '@/Components/Footer/Footer';

const page = () => {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[]);

  return (
    <>
      <div className='dark:bg-black dark:text-white'>
        <Hero/>
        <Contact/>
        <BestCabs/>
        <About/>
        <AppStore/>
        <Testimonial/>
      </div>
    </>
  )
}

export default page
