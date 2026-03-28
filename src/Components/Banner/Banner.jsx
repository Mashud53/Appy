import React from 'react';
import { FaGooglePay, FaGooglePlay } from 'react-icons/fa';
import playStore from "../../assets/playStore.png"
import appStore from "../../assets/appStore.png"
import { Link } from 'react-router';
import bannrImg from '../../assets/hero.png'


const Banner = () => {
    return (
        <div className='pt-20 bg-[#e9e8e8]'>
            <div >
                <div className='flex flex-col justify-center items-center '>
                    <h2 className='w-64 text-center text-3xl font-bold'>
                        We Build <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps
                    </h2>
                    <p className='text-sm text-gray-500 my-4 max-w-145 text-center'>
                        At Appy, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact
                    </p>
                    <div className='flex items-center gap-3'>
                        <Link to={"https://play.google.com/store/games?hl=en"} className='border border-gray-400 px-3 py-2 rounded-md text-sm font-semibold flex justify-center items-center gap-1'> <img src={playStore} alt="playstore" className='w-6' /> Google Play</Link>
                        <Link to={"https://www.apple.com/app-store/"} className='border border-gray-400 px-3 py-2 rounded-md text-sm font-semibold flex justify-center items-center gap-1'> <img src={appStore} alt="app store" className='w-6' /> App Store</Link>
                    </div>
                </div>

            </div>
            <div className='mt-8 flex justify-center'>
                <img src={bannrImg} alt="" />

            </div>
            <div className='py-8 text-white font-semibold text-center bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
                <h2 className='text-xl font-bold'>Trusted By Millions, Built For You</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
                    <div className='text-center text-xs font-light'>
                        <p>Total Downlaods</p>
                        <h2 className='text-2xl font-bold py-3'>29.6M</h2>
                        <p>21% More Than Last Month</p>
                    </div>
                    <div className='text-center text-xs font-light'>
                        <p>Total Reviews</p>
                        <h2 className='text-2xl font-bold py-3'>906K</h2>
                        <p>46% More Than Last Month</p>
                    </div>
                    <div className='text-center text-xs font-light'>
                        <p>Active Apps</p>
                        <h2 className='text-2xl font-bold py-3'>132+</h2>
                        <p>31 More Will Launch</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;