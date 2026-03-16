import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { router } from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import RootLayout from './RootLayout/RootLayout.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    <StrictMode>
      <RootLayout />
    </StrictMode>,
  </RouterProvider>,

)
