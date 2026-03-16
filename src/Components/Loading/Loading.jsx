import React from 'react';
import logo from "../../assets/logo.png"

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div>
                <p>L</p>
            <img src={logo} alt="" className='animate-spin'/>
            <p>ading</p>
            </div>
        </div>
    );
};

export default Loading;