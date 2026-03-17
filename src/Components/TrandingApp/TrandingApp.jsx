import React from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router';
import Title from '../Title/Title';

const TrandingApp = ({ appsData }) => {

    console.log(appsData)

    return (
        <div className='py-12 px-8 bg-[#e9e8e8] '>
            <Title title={"Trending Apps"} desc={"Explore All Trending Apps on the Market developed by us"} />
            <div className='grid cols-1 md;grid-cols-2 lg:grid-cols-4 gap-4 mx-auto justify-center'>
                {
                    appsData.slice(0, 8).map(data => <Card data={data} key={data.id}></Card>)
                }
            </div>
            <div className='flex justify-center items-center mt-8'>
                <Link to={'/allapps'} className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</Link>
            </div>
        </div>
    );
};

export default TrandingApp;