import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='font-raleway'>
            {/* Navbar */}
            <Navbar></Navbar>

            <div className='min-h-[calc(100vh-232px)]'>
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;