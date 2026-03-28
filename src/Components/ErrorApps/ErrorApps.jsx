import React from 'react';
import errorImg from "../../assets/App-Error.png"
import { Link } from 'react-router';

const ErrorApps = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center py-8'>
            <img src={errorImg} alt="Error img" />
            <h2 className='text-xl font-bold mt-12'>Oops!! App not found!</h2>
            <p className='text-gray-500 py-4'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to={"/"} >
            <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>
            </Link>
        </div>
    );
};

export default ErrorApps;