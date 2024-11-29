import React from 'react';
import topLeft from '../assets/images/more/4.png'
import bottomRight from '../assets/images/more/5.png'
import { RiCupLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const PopularProducts = () => {
    return (
        <div className='relative'>
            <div className='absolute top-0 left-0 -z-20'>
                <img className='w-1/2 md:w-auto' src={topLeft} alt="" />
            </div>
            <div className='w-1/2 md:w-auto absolute right-0 -z-20'>
                <img className='w-full' src={bottomRight} alt="" />
            </div>
            <div className='text-center space-y-3 mb-5 lg:mb-10'>
                <p className='text-xl'>--- Sip & Savor ---</p>
                <h1 className='text-[#331A15] font-rancho text-4xl md:text-6xl'>Our Popular Products</h1>
                <div>
                    <Link to='/addCoffee'>
                        <button className='font-rancho btn bg-btnBg text-white font-light text-2xl border-black'>Add Coffee <RiCupLine className='text-black' /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;