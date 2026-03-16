import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import TrandingApp from '../../Components/TrandingApp/TrandingApp';
import Loading from '../../Components/Loading/Loading';
import { useLoaderData } from 'react-router';

const Home = () => {
   
   const appsData = useLoaderData()
   
    return (
        <div className=''>
            <Banner/>
             <TrandingApp appsData ={appsData}/>
        </div>
    );
};

export default Home;