import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div className='font-raleway'>
            {/* Navbar */}
            <Navbar></Navbar>

            <Outlet></Outlet>

            {/* Footer */}
        </div>
    );
};

export default MainLayout;