import React from 'react';
import bg from '../../assets/bg.png'
import { TbBackground } from 'react-icons/tb';
import { FaArrowCircleRight } from 'react-icons/fa';
import bgRight from '../../assets/bgright.png'
import mid from '../../assets/Group 482.png'
import bl from '../../assets/bottom-left-shape.png'

const Banner = () => {
    return (
        
            <div style={{ backgroundImage: `URL(${bg})` }}
                className='h-[500px] bg-center bg-cover w-full'>
                <div className=' flex justify-around items-center'>
                
                <div className='relative'>
                        <div className='relative'>
                    <div className='w-[600px] ml-10 p-20 m-3 '>
                     <h1 className='text-white/70 font-semibold text-2xl'>Super Delicious</h1>
                <h1 className= 'p-2 text-white text-5xl font-bold'>The best way to <br />
                    stuff your <br /> wallet.</h1>
                <h1 className='text-white/70 text-xl font-medium p-2'>Today's Best Deal</h1>
                <button className='m-4 bg-[#CD7A1D] gap-2 flex items-center w-[130px] p-2 h-10 rounded-xl'>
                    < FaArrowCircleRight className='text-white' />
                    <h1 className='text-white'>Order Now</h1>
                </button>
                </div>
                </div>

                <div className=' absolute right-10 top-60 '>
                    <img src={mid} alt="" />
                </div>
                </div>

                <div className='absolute left-0 md:top-131'>
                    <img className='w-40' src={bl} alt="" />
                </div>

                <div className='relative'> 
                        <div className=' '>
                    <img className=' w-auto pl-10' src={bgRight} alt="" />
                </div>

                </div>

                <div className=' absolute right-70 top-145'>
                    
                    <div className=' text-[13px]'>
                        <h1 className='text-[#CD7A1D] -pt-2'> +8801685080405</h1>
                        <h1 className='text-white '>www.foodzy.com</h1>
                    </div>
    
                </div>

            </div>



        </div>
    );
};

export default Banner;