import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { ArtistInfo } from './Components/ArtistInfo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    
    path: '/:uuid',
    element: <ArtistInfo />
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
