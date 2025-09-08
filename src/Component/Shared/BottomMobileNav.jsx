import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import { FaRegHeart } from 'react-icons/fa6';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

const BottomMobileNav = () => {
    return (
        <div>
            <div className='bg-primary text-white py-6 px-1 min-w-full mt-10 md:hidden fixed bottom-0 '>
                            <ul className='flex justify-evenly gap-2 '>
                                <li className='text-lg font-medium font-poppins flex gap-3  items-center'><FaHome/> <link rel="stylesheet" href="/home" />Home</li>
                                <li className='text-lg font-medium font-poppins flex gap-3  items-center'><VscAccount/> Account</li>
                                <li className='text-lg font-medium font-poppins flex gap-3 items-center'><FaRegHeart/> Wishlist</li>
                                <li className='text-lg font-medium font-poppins flex gap-3 items-center'><AiOutlineShoppingCart />Cart</li>
                            </ul>
                        </div>
        </div>
    );
};

export default BottomMobileNav;