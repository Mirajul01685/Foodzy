
import React from 'react';
import PageName from '../PageName/PageName';
import { products } from '../../Data/PopularProductData';
import { Link } from 'react-router';
import Rating from '@mui/material/Rating';
import { RiPokerHeartsLine } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import CartItem from './CartItem';

const Cart = () => {
    return (
        <div className='container mx-auto'>
            <PageName></PageName>
            <div>
                <div className="overflow-x-auto mt-30 md:mt-10 w-full  md:w-auto">
                    <table className="table bg-[#F7F7F8]">
                        {/* head */}
                        <thead className="bg-[#E9E9E9]">
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th className="text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item,index)=> <CartItem key={index} item={item}></CartItem> )
                            }
                        </tbody>
                    </table>




                    <div className="flex my-10 justify-between items-center">
                        <Link className="underline text-black/70" to={"/"}>
                            Continue Shopping.
                        </Link>
                        <button className="btn bg-primary text-white">Checkout</button>
                    </div>
                    <div>
                        <div className='text-center'>
                            <h1 className='font-libre font-bold text-4xl text-[#2B2B2D]'> Popular Products</h1>
                            <h1 className='font-poppins font-regular text-lg text-[#7A7A7A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque <br /> assumenda ex amet qui atque?
                            </h1>
                        </div>
                        <div className='grid md:grid-cols-4 gap-3 mt-10'>
                            {
                                products.slice(0,4).map((item, index) =>
                                    <div key={index} className='text-center border-2 border-black/10 rounded-xl' >
                                        <div className=' relative'>
                                            <h1 className='container mx-auto p-2  w-full h-[280px]'>{item.img} </h1>
                                        </div>
                                        
                                        <div className='p-3'>
                                            <h1 className='text-lg font-libre text-[#777777]'>{item.subtitle}</h1>
                                            <div className='flex items-center justify-center gap-3'>
                                                <h1>{item.ratingStar}</h1>
                                                <h1>({item.rating})</h1>


                                            </div>
                                            <h1 className='text-xl font-medium font-poppins'>{item.title}</h1>

                                            <div className='flex gap-2 justify-center pt-2 items-center'>
                                                <h1 className='text-2xl font-poppins font-bold text-[#F53E32]'>${item.discountedPrice}</h1>
                                                <h1 className='line-through text-lg text-[#7A7A7A] font-poppins font-regular'>${item.originalPrice}</h1>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;