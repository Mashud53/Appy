import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../RootLayout/RootLayout';
import Home from '../Pages/Home/Home';


    export const router = createBrowserRouter([
        {
            path:"/",
            Component: RootLayout,
            children:[
                {
                    index:true,
                    path:"/",
                    loader:()=>fetch('/apps.json').then(res=>res.json())  ,
                    Component: Home
                }
            ]


        }
    ])


