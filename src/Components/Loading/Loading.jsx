import React from 'react';
import logo from "../../assets/logo.png"

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center text-lg'>
            <div className='flex items-center gap-1'>
                <p>L</p>
            <img src={logo} alt="" className='animate-spin w-6 h-6'/>
            <p>ading</p>
            </div>
        </div>
    );
};

export default Loading;