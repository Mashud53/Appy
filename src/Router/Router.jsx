import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../RootLayout/RootLayout';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AppsDetails from '../Pages/AppsDetails/AppsDetails';
import InstalledApp from '../Pages/InstalledApp/InstalledApp';
import ErrorApps from '../Components/ErrorApps/ErrorApps';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('/apps.json').then(res => res.json()),
                Component: Home
            },
            {
                path: '/allapps',
                Component: AllApps
            },
            {
                path: '/appDetails/:id',                
                // loader: () => fetch('/apps.json').then(res => res.json()),
                loader: () => fetch('https://raw.githubusercontent.com/Mashud53/Appy/refs/heads/main/public/apps.json').then(res => res.json()),
                Component: AppsDetails,
                errorElement:<ErrorApps></ErrorApps>
            },
            {
                path: '/installedApp',
                
                Component: InstalledApp
            }
        ]


    }
])


