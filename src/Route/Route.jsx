import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import React from 'react';
import Product from "../Component/Product/Product";
import Blog from "../Component/Blog/Blog";
import FAQ from "../Component/FAQ/Faq";
import Error from '../Component/ErrorElement/Error'
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
         {
            path :"/product",
            element : <Product></Product>
        },
         {
            path :"/blog",
            element :<Blog></Blog>
        },
         {
            path :"/FAQ",
            element :<FAQ></FAQ>   
             },
         
    ]
    
  }
]);
export default router;