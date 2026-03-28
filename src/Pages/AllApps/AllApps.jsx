import React, { Suspense} from 'react';
import Loading from '../../Components/Loading/Loading';
import Apps from '../../Components/Apps/Apps';
import Title from '../../Components/Title/Title';



const AllApps = () => {
  
    const appPromise = fetch('https://raw.githubusercontent.com/Mashud53/Appy/refs/heads/main/public/apps.json').then(res=>res.json())

    return (
        <div className='py-20 px-4 bg-[#e9e8e8] min-h-screen'>
            <Title title={"Our All Applicatons"} desc={"Explore All Apps on the Market developed by us. We code for Millions"} />
            <Suspense fallback={<Loading/>}>
                <Apps appPromise ={appPromise }/>
            </Suspense>      
           
        </div>
    );
};

export default AllApps;