import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import NumberFormater from "../../Utils/NumberFormater"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import Swal from 'sweetalert2';

const AppsDetails = () => {
    const {id} = useParams()
    const appsData = useLoaderData()
    const [installedApp, setInstalledApp] = useState(
        JSON.parse(localStorage.getItem("appStore")) ||[]
    )
    const numericId = parseInt(id)

    const filterData = appsData.find(app => parseInt(app.id) === numericId)

    const { title, companyName, image, downloads, ratingAvg, ratings, reviews, size, description } = filterData
    const barData = [...ratings].reverse()
    
    const isInstalled = installedApp.includes(numericId)


    const handleInstall = () => {
        let updatedApps = [...installedApp]

        if (!updatedApps.includes(numericId)) {
            updatedApps.push(numericId)

            localStorage.setItem("appStore", JSON.stringify(updatedApps))
            setInstalledApp(updatedApps)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${title} installed successfull`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className='min-h-screen py-10 bg-[#e9e8e8] px-8'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-1'>
                    <img src={image} alt="" className='w-full' />

                </div>
                <div className='col-span-2'>
                    <div>
                        <h2 className='text-xl font-bold'>{title}</h2>
                        <p className='text-sm'>Developed by: <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>
                    </div>
                    <div className='border-t border-gray-300 my-4'>
                        <div className='grid grid-cols-3 gap-6 mt-4'>
                            <div className='flex flex-col items-start justify-center text-xs font-light'>
                                <img src={downImg} alt="" className='w-5' />
                                <p className='py-1'>Downlaods</p>
                                <h2 className='text-2xl font-bold '>{NumberFormater(downloads)}</h2>

                            </div>
                            <div className='flex flex-col items-start justify-center text-xs font-light'>
                                <img src={ratingImg} alt="" className='w-5' />
                                <p className='py-1'>Average Rating</p>
                                <h2 className='text-2xl font-bold'>{ratingAvg}</h2>

                            </div>
                            <div className='flex flex-col items-start justify-center text-xs font-light'>
                                <img src={reviewImg} alt="" className='w-5' />
                                <p className='py-1'>Total Reviews</p>
                                <h2 className='text-2xl font-bold'>{NumberFormater(reviews)}</h2>

                            </div>

                        </div>
                    </div>
                    <div>
                        {
                            isInstalled ? <button className='btn bg-green-400 text-white mt-4'> Installed</button> : <button onClick={handleInstall} className='btn bg-green-400 text-white mt-4'> Install Now ({size} MB)</button>
                        }
                    </div>
                </div>

            </div>
            <div className='border-t border-b border-gray-300 my-4 py-8 '>
                <h2 className='text-lg font-bold mb-4'>Ratings</h2>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData} layout="vertical">
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />

                        <Bar dataKey="count" fill='#FF8811' />
                    </BarChart>
                </ResponsiveContainer>



            </div>
            <div>
                <h2 className='text-lg font-bold mb-4'>Description</h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AppsDetails;