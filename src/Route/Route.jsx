import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import React from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
        {
            path :"/",
            element :<Home></Home>
        },
         {
            path :"/about",
            element :<About></About>
        },
         
    ]
    
  }
]);
export default router;