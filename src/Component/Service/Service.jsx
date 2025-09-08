import React from 'react';
import { GiBoxUnpacking } from "react-icons/gi";
import { Ri24HoursFill } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";

const Service = () => {
    return (
        <div className='grid grid-cols-4 gap-4 container mx-auto m-10  '>
            <div className='bg-black/5 p-10 pt-10  rounded-xl  '>
                <h1 className='text-5xl flex justify-center pb-5'><GiBoxUnpacking /></h1>
                <h1 className='font-poppins font-semibold text-xl text-center text-black'>Product Packing</h1>
                <h1 className=' text-center font-poppins font-light text-lg text-[#7A7A7A]'>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing.</h1>
            </div>

            <div className='bg-black/5 p-8 pt-10 rounded-xl'>
                <h1 className='text-5xl flex justify-center pb-5'><Ri24HoursFill /></h1>
                <h1 className='font-poppins font-semibold text-xl text-center text-black'>24X7 Support</h1>
                <h1 className=' text-center font-poppins font-light text-lg text-[#7A7A7A]'>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing.</h1>
            </div>

            <div className='bg-black/5 p-8 pt-10 rounded-xl'>
                <h1 className='text-5xl flex justify-center pb-5'><MdDeliveryDining /></h1>
                <h1 className='font-poppins font-semibold text-xl text-center text-black'>Delivery in 5 Days</h1>
                <h1 className=' text-center font-poppins font-light text-lg text-[#7A7A7A]'>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing.</h1>
            </div>

            <div className='bg-black/5 p-8 pt-10 rounded-xl'>
                <h1 className='text-5xl flex justify-center pb-5'><MdOutlinePayment /></h1>
                <h1 className='font-poppins font-semibold text-xl text-center text-black'>Payment Secure</h1>
                <h1 className=' text-center font-poppins font-light text-lg text-[#7A7A7A]'>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing.</h1>
            </div>
        </div>
    );
};

export default Service;