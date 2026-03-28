import React from 'react';
import downImg from "../../assets/icon-downloads.png"
import ratingImg from "../../assets/icon-ratings.png";
import NumberFormater from "../../Utils/NumberFormater"
import Swal from 'sweetalert2';

const InstallAppCard = ({ app, setInstalledApp }) => {
    
    const { id, title, downloads, image, ratingAvg, size } = app

    const handleUninstall=()=>{
        const InstalledApps = JSON.parse(localStorage.getItem("appStore"))
        const filterApps = InstalledApps.filter(item => item !== id)
        localStorage.setItem("appStore", JSON.stringify(filterApps))
        setInstalledApp(filterApps)
        Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} Uninstalled successfull`,
                        showConfirmButton: false,
                        timer: 1500
                    });
        
    }
    return (
        <div className="overflow-x-auto bg-white rounded-lg">
            <div className="table table-zebra">

                <div>
                    {/* row 1 */}
                    <div className='flex justify-between items-center p-4'>

                        <div>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={image}
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{title}</div>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1 text-green-600'>
                                            <img src={downImg} alt="" className='w-2.5' />
                                            <h2 className='text-xs font-semibold'>{NumberFormater(downloads)}</h2>
                                        </div>
                                        <div className='flex items-center gap-1 text-amber-500'>
                                            <img src={ratingImg} alt="" className='w-2.5' />
                                            <h2 className='text-xs font-semibold'>{ratingAvg}</h2>
                                        </div>

                                        <div>
                                            <h2 className='text-gray-500 text-xs'>{size} MB</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <button onClick={handleUninstall} className="btn bg-green-500 text-white">UnInstall</button>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default InstallAppCard;