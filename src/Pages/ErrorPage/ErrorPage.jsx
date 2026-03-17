import React from 'react';
import errorImg from "../../assets/error-404.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <img src={errorImg} alt="Error img" />
            <h2 className='text-xl font-bold mt-12'>Oops, page not found!</h2>
            <p className='text-gray-500 py-4'>The page you are looking for is not available</p>
            <Link to={"/"} >
            <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>
            </Link>
        </div>
    );
};

export default ErrorPage;