import React, { Suspense } from 'react';
import Title from '../../Components/Title/Title';
import InstallApps from '../../Components/Installapps/InstallApps';
import Loading from '../../Components/Loading/Loading';

const InstalledApp = () => {
     const appPromise = fetch('https://raw.githubusercontent.com/Mashud53/Appy/refs/heads/main/public/apps.json').then(res=>res.json())
    return (
        <div className='py-20 px-4 bg-[#e9e8e8] min-h-screen'>
            <Title title={"Your Installed Apps"} desc={"Explore All Trending Apps on the Market developed by us"} />
            <Suspense fallback={<Loading/>}>
                <InstallApps appPromise={appPromise}></InstallApps>
            </Suspense>
        </div>
    );
};

export default InstalledApp;