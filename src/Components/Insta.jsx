import React from 'react';
import cup1 from '../assets/images/cups/Rectangle 9.png'
import cup2 from '../assets/images/cups/Rectangle 10.png'
import cup3 from '../assets/images/cups/Rectangle 11.png'
import cup4 from '../assets/images/cups/Rectangle 12.png'
import cup5 from '../assets/images/cups/Rectangle 13.png'
import cup6 from '../assets/images/cups/Rectangle 14.png'
import cup7 from '../assets/images/cups/Rectangle 15.png'
import cup8 from '../assets/images/cups/Rectangle 16.png'

const Insta = () => {
    return (
        <div className='container mx-auto mb-10 lg:mb-24'>
            <div className='text-center space-y-3 mb-5 lg:mb-10'>
                <p className='text-xl'>Follow Us Now</p>
                <h1 className='text-[#331A15] font-rancho text-4xl md:text-6xl'>Follow on Instagram</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-6'>
                <img className='w-full object-cover' src={cup1} alt="" />
                <img className='w-full object-cover' src={cup2} alt="" />
                <img className='w-full object-cover' src={cup3} alt="" />
                <img className='w-full object-cover' src={cup4} alt="" />
                <img className='w-full object-cover' src={cup5} alt="" />
                <img className='w-full object-cover' src={cup6} alt="" />
                <img className='w-full object-cover' src={cup7} alt="" />
                <img className='w-full object-cover' src={cup8} alt="" />
            </div>
        </div>
    );
};

export default Insta;