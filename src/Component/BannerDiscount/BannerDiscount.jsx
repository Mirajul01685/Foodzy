import React from 'react';
import bannerdis1 from '../../assets/bannerdis → (1).png'
import bannerdis2 from '../../assets/bannerdis → (2).png'
import bannerdis3 from '../../assets/bannerdis → (3).png'
const BannerDiscount = () => {
    return (
        <div className=' flex container mx-auto gap-3'>
            <div className=' relative'> 
                <img src={bannerdis1} alt="" />
               
            </div>

             <div className=' absolute  left-43 top-600'>
                    <h1 className='font-libre font-bold text-xl text-[#2B2B2D] pb-2'>Healthy <br />
                        Bakery Products</h1>
                   <div className='flex items-center'> 
                         <h1 className=' font-poppins text-xl font-bold text-primary'>30%</h1>
                    <h1 className='text-lg font-regular text-[#777777] font-poppins'> Off on first order</h1>
                   </div>
                    <button className='bg-primary rounded  p-3 my-3 px-5'>
                        <h1 className='text-white '>Shop Now</h1>
                    </button>
                </div>
 
  <div className=' relative'> 
                <img src={bannerdis2} alt="" />
               
            </div>

             <div className=' absolute  left-148 top-600'>
                    <h1 className='font-libre font-bold text-xl text-[#2B2B2D] pb-2'>Healthy <br />
                        Bakery Products</h1>
                   <div className='flex items-center'> 
                         <h1 className=' font-poppins text-xl font-bold text-primary'>20%</h1>
                    <h1 className='text-lg font-regular text-[#777777] font-poppins'> Off on first order</h1>
                   </div>
                    <button className='bg-primary rounded  p-3 my-3 px-5'>
                        <h1 className='text-white '>Shop Now</h1>
                    </button>
                </div>

                 <div className=' relative'> 
                <img src={bannerdis3} alt="" />
               
            </div>

             <div className=' absolute  left-255 top-600'>
                    <h1 className='font-libre font-bold text-xl text-[#2B2B2D] pb-2'>Healthy <br />
                        Bakery Products</h1>
                   <div className='flex items-center'> 
                         <h1 className=' font-poppins text-xl font-bold text-primary'>35%</h1>
                    <h1 className='text-lg font-regular text-[#777777] font-poppins'> Off on first order</h1>
                   </div>
                    <button className='bg-primary rounded  p-3 my-3 px-5'>
                        <h1 className='text-white '>Shop Now</h1>
                    </button>
                </div>



            
        </div>
    );
};

export default BannerDiscount;