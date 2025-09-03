import React, { useState } from 'react';
import logo from '../../assets/Page-1 1.png';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { FaRegHeart } from 'react-icons/fa6';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
    const [isDropDownOpen ,SetIsDropDwonOpen]=useState(false)
    const foodList = [
            'Pizza',
            'Burger',
            'Pasta',
            'Sushi',
            'Tacos',
            'Salad',
            'Sandwich',
            'Ice Cream',
            'Steak',
            'Soup',
            
        ];
        console.log(isDropDownOpen)
    return (
        <>
            <div className='flex gap-4 justify-around items-center container mx-auto '>
                <div className='flex items-center'>
                <img className='w-20 h-20' src={logo} alt="Foodzy Logo" />
                <div>
                    <h1 className='text-[24px] font-black'>Foodzy</h1>
                    <h1 className='text-[12px] font-semibold'>A Treasure Of Tastes</h1>
                </div>
            </div>
             <div className='flex items-center h-[45px] w-[600px] '>
                    <input type="text" placeholder='Search For items...' className='flex-1 border focus:border-2 border-[#64B496] focus:outline-[#64B496] p-5 h-[45px] rounded-xl rounded-r-none' />
                   <div className='relative  '>
                        <div onClick={()=>SetIsDropDwonOpen(prev=>!prev)} className='flex  h-[45px] p-5 items-center border border-r-0 border-l-0  focus:border-2 border-[#64B496] focus:outline-[#64B496]'>
                        All Categories 
                        <RiArrowDropDownLine className='text-4xl '/>
                    </div>

                    <div className={`absolute bg-white top-[40px] w-[220px] text-xl ${isDropDownOpen ?"h-[250px]":"h-0"} duration-300  overflow-auto`}> 
                        {
                            foodList.map((item ,index)=><div className='p-1 hover:bg-black/5' key={index}>{item}</div>)
                        }
                    </div>

                    </div>
                    <div className='w-[45px] h-[45px]   flex  justify-center items-center bg-primary text-white rounded-xl rounded-l-none'>
                        <FaSearch/>
                    </div>

            </div>

            <div className=''>
                <ul className='flex gap-10 '>
                    <li className='text-lg font-medium font-poppins flex gap-3  items-center'><VscAccount/> Account</li>
                    <li className='text-lg font-medium font-poppins flex gap-3 items-center'><FaRegHeart/> Wishlist</li>
                    <li className='text-lg font-medium font-poppins flex gap-3 items-center'><AiOutlineShoppingCart />Cart</li>
                </ul>
            </div>

            </div>
           
           
        </>
    );
};

export default Navbar;
