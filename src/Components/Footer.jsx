import React from 'react';
import navLogo from '../assets/images/more/logo1.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-footerBg bg-no-repeat bg-center bg-cover '>
            <div className='pt-8 md:pt-28 container mx-auto pb-4 md:pb-11'>
                <div className='w-16 md:w-20 pl-5 mb-4'>
                    <img className='w-full' src={navLogo} alt="" />
                </div>

                <div className='flex flex-col-reverse gap-6 lg:gap-0 lg:flex-none lg:grid lg:grid-cols-12 '>
                    <div className='col-span-7 w-11/12 mx-auto space-y-6'>

                        <h1 className="font-rancho text-2xl md:text-4xl lg:text-6xl text-[#331A15]">Espresso Emporium</h1>
                        <p className='max-w-2xl'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='text-4xl text-[#331A15] gap-5 flex'>
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>

                        <h1 className="font-rancho text-2xl md:text-4xl lg:text-6xl text-[#331A15]">Get in Touch</h1>

                        <div className='space-y-4'>
                            <div className='flex gap-6 items-center '>
                                <p className='text-xl text-[#331A15]'><IoCallSharp /></p>
                                <p>+88 01533 333 333</p>
                            </div>
                            <div className='flex gap-6 items-center '>
                                <p className='text-xl text-[#331A15]'><IoIosMail /></p>
                                <p>info@gmail.com</p>
                            </div>
                            <div className='flex gap-6 items-center '>
                                <p className='text-xl text-[#331A15]'><FaLocationDot /></p>
                                <p>72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>
                    </div>


                    <div className='col-span-5 w-11/12 mx-auto space-y-6'>
                        <h1 className="font-rancho text-2xl md:text-4xl lg:text-6xl text-[#331A15]">Contact With Us</h1>
                        <div className='space-y-4'>
                            <input type="text" placeholder="Name" className="input w-full" />
                            <input type="text" placeholder="Email" className="input w-full" />
                            <textarea className="textarea w-full" placeholder="Message"></textarea>
                            <button className='btn btn-outline font-rancho rounded-3xl text-[#331A15] text-xl border-[#331A15]'>Send Message</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='py-3 text-center bg-footerBg2 text-white font-rancho'>
                <p>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;