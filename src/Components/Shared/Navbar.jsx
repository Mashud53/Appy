import React from 'react';
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import { FaG } from 'react-icons/fa6';

const Navbar = () => {
    const navItems=<>
    <li><NavLink to={'/'}
    className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline":""}
    >Home</NavLink></li>
    <li ><NavLink to={'/allapps'}
    className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline":""}>Apps</NavLink></li>
    <li><NavLink to={'/installedApp'}
    className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline":""}>Installation</NavLink></li>
      
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-8">
            <div className="navbar-start">
                

                <Link to={"/"}>
                    <div className='flex justify-center gap-1'>
                        <img src={logo} alt="" className='w-8' />
                        <p className='text-lg font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Appy</p>
                    </div>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'https://github.com/Mashud53/Appy'} className='btn flex items-center gap-1.5 bg-lg font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'><FaGithub className='text-lg'/><span>Contribute</span></Link>
                <div className="dropdown dropdown-end ml-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;