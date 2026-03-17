import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import Card from '../Card/Card';

const Apps = ({appPromise }) => {
    const [displayApps, setDisplayApps] = useState([])
        const [search, setSearch] = useState("")
        
    const appsData = use(appPromise )
    console.log(appsData )

useEffect(() => {
       
        if (search.length>0) {
            const filterdata = appsData.filter(app => app.title.toLowerCase().includes(search.toLowerCase()))
            console.log(filterdata)
           
            setDisplayApps(filterdata)
            

        }
        else {
            setDisplayApps(appsData)
        }
        
    }, [appsData, search])

    const handleChange = (e) => {
        e.preventDefault()
       
        const searchItem = e.target.name.value
       setSearch(searchItem)
      
        console.log(searchItem)

    }
    return (
        <div>
             
            <div className='my-2 flex justify-between items-center '>
                <p className='text-base font-bold'>({displayApps.length}) Apps Found</p>
                <form onSubmit={handleChange} className='relative'>
                    <input
                        type="text"
                        name='name'
                        placeholder="Search"
                        className="border border-gray-400 rounded-md p-1 pl-8 bg-[#e9e8e8]" />
                    <button type='submit'>
                        <FaSearch className='absolute top-1/2 left-2 transform -translate-y-1/2' />
                    </button>
                </form>
            </div>
            <div >
                               
                {

                   displayApps.length > 0 ? <><div className='grid cols-1 md;grid-cols-2 lg:grid-cols-4 gap-4 mx-auto justify-center'>{displayApps?.map(data => <Card data={data} key={data.id}></Card>)} </div>
                   
                   </>:<>
                   <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl font-bold'>No Apps Found </h2>
                    <Link onClick={()=>{setSearch("")}} to={"/allapps"} className='btn bg-gray-600 text-white mt-8'>Show All App</Link>
                   </div>
                   </>
                   
                }
            </div>
            
        </div>
    );
};

export default Apps;