import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './Body'
import FindDoctors from './FindDoctors'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'; 
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/find-doctors',
        element: <FindDoctors/>
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(

<StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
