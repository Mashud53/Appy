import React from 'react';
import logo from "../../assets/logo.png"

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='flex items-center gap-1'>
                <p>L</p>
            <img src={logo} alt="" className='animate-spin w-4 h-4'/>
            <p>ading</p>
            </div>
        </div>
    );
};

export default Loading;