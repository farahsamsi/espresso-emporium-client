import React from 'react';
import first from '../assets/images/icons/1.png'
import second from '../assets/images/icons/2.png'
import third from '../assets/images/icons/3.png'
import fourth from '../assets/images/icons/4.png'

const Banner = () => {
    return (
        <div>
            <div className='min-h-[400px] md:min-h-[600px] lg:min-h-[800px] bg-bannerBg bg-no-repeat bg-cover bg-center text-white grid lg:grid-cols-2 items-center md:items-start lg:items-center'>
                <div className='hidden lg:flex'></div>
                <div className='max-w-2xl mx-auto mt-10 md:mt-20 lg:mt-0 text-center lg:text-left space-y-4'>
                    <h1 className='font-rancho text-4xl md:text-5xl'>Would you like a Cup of Delicious Coffee?</h1>
                    <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='font-rancho btn bg-btnBg rounded-none text-2xl border-none'>Learn More</button>
                </div>
            </div>
            <div className='py-14 bg-[#ECEAE3]'>
                <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0'>
                    <div className='w-11/12 mx-auto flex flex-col items-center md:items-start text-center md:text-left'>
                        <div className='mb-4'>
                            <img src={first} alt="" />
                        </div>
                        <h2 className='font-rancho text-4xl mb-2'>Awesome Aroma</h2>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='w-11/12 mx-auto flex flex-col items-center md:items-start text-center md:text-left'>
                        <div className='mb-4'>
                            <img src={second} alt="" />
                        </div>
                        <h2 className='font-rancho text-4xl mb-2'>High Quality</h2>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className='w-11/12 mx-auto flex flex-col items-center md:items-start text-center md:text-left'>
                        <div className='mb-4'>
                            <img src={third} alt="" />
                        </div>
                        <h2 className='font-rancho text-4xl mb-2'>Pure Grades</h2>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className='w-11/12 mx-auto flex flex-col items-center md:items-start text-center md:text-left'>
                        <div className='mb-4'>
                            <img src={fourth} alt="" />
                        </div>
                        <h2 className='font-rancho text-4xl mb-2'>Proper Roasting</h2>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;