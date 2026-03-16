import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;