import React, { use, useEffect, useState } from 'react';
import InstallAppCard from '../InstallAppCard/InstallAppCard';
import { FaAngleDown, FaArrowDown } from 'react-icons/fa6';

const InstallApps = ({ appPromise }) => {
    const [displayApp, setDisplayApp] = useState([])
    const [InstalledApp, setInstalledApp] = useState(
        JSON.parse(localStorage.getItem("appStore")) || []
    )
    const appData = use(appPromise)


    useEffect(() => {
        const filterApp = appData.filter(app => InstalledApp.includes(app.id))

        setDisplayApp(filterApp)

    }, [appData, InstalledApp])

    const HandleLowtoHigh = () => {
        const LowtoHigh = [...displayApp].sort((a, b) => a.downloads - b.downloads)

        setDisplayApp(LowtoHigh)


    }

    const HandleHightoLow = () => {
        const HightoLow = [...displayApp].sort((a, b) => b.downloads - a.downloads)
        setDisplayApp(HightoLow)

    }



    return (
        <div >
            <div className='flex justify-between items-center py-4'>
                <div>
                    <h2 className='text-lg font-bold'>{displayApp.length} Apps Found</h2>
                </div>
                <div>
                    <div className="dropdown dropdown-bottom dropdown-left">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By Size <span><FaAngleDown /></span></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={HandleLowtoHigh} className='cursor-pointer p-1 hover:text-green-600'>Low to High</li>
                            <li onClick={HandleHightoLow} className='cursor-pointer p-1 hover:text-green-600'>High to Low</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 gap-4 mx-auto'>
                {
                    displayApp.map(app => <InstallAppCard key={app.id} app={app} setInstalledApp={setInstalledApp} />)
                }

            </div>
        </div>
    );
};

export default InstallApps;