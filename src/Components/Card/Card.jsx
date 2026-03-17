import React from 'react';
import downloadimg from "../../assets/icon-downloads.png"
import ratingimg from "../../assets/icon-ratings.png"

const Card = ({ data }) => {
    const { id, title, image, downloads, ratingAvg } = data
    // console.log(data)
    return (
        <div className="card bg-base-100 w-72 shadow-sm p-4">
           
            <div>
                <img src={image} alt="" className='rounded-lg hover:translate-0.5 duration-75'/>
            </div>
            <div>
                <h2 className='my-4'>{title}</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-1 bg-[#F1F5E8] px-3 py-2 rounded-lg'>
                        <img src={downloadimg} alt="" className='w-3'/>
                        <p className='text-green-600 text-xs'>{downloads}</p>
                    </div>
                    <div className='flex items-center gap-1 bg-[#FFF0E1] px-3 py-2 rounded-lg'>
                        <img src={ratingimg} alt="" className='w-3'/>
                        <p className='text-yellow-500 text-xs'>{ratingAvg}</p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Card;