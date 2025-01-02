import React from 'react';
import BannerImg from "../assets/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

import Banner from "../assets/banner.jpg";

const bannerData = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition:"center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%"
}

const Winter_Banner = () => {
  return (
    <>
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div data-aos="zoom-in">
                   <img src={BannerImg} className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
                </div>

                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                  <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Winter Sale upto 50% Off</h1>
                  <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia laudantium id animi cumque odit assumenda quibusdam voluptas beatae consequatur?</p>
                  <div className='flex flex-col gap-4'>
                    <div data-aos="fade-up" className='flex items-center gap-4'>
                        <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                        <p>Quality Products</p>
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4'>
                        <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                        <p>Fast Delivery</p>
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4'>
                        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
                        <p>Easy Payment method</p>
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4'>
                        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'/>
                        <p>Get Offers</p>
                    </div>

                  </div>
                </div>
            </div>
        </div>
    </div>

    <div data-aos="zoom-in" className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' style={bannerData}>
        <div className='container backdrop-blur-sm py-10'>
          <div className='space-y-6 max-w-xl mx-auto'>
              <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
              <input data-aos="fade-up" type="text" placeholder='Enter your email' className='w-full p-3' /> 
          </div>
        </div>
    </div>
    </>
  );
};

export default Winter_Banner;