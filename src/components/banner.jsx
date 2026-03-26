import React from 'react';
import BannerMain from '../assets/banner-main.png'
const Banner = () => {
    console.log("hello, Banner")
    return (
        <div className="text-center py-12 rounded-md  bg-[#131313] justify-center mx-auto bg-[url(./assets/bg-shadow.png)] w-[1140px] text-[#FFFFFF] space-y-2">
            <img className='mx-auto' src={BannerMain} alt="banner main image" />
            <h2 className='text-3xl font-semibold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className='text-[#F1FAFC] text-xl'>Beyond Boundaries Beyond Limits</p>
            <div className='border-1 w-48 mx-auto border-lime-400 rounded-md'>
                <button className='bg-lime-300 text-[#000000] font-medium w-44 rounded-md p-1 m-1'>Claim Free Credit</button>
            </div>
        
            
        </div>
    );
};

export default Banner;