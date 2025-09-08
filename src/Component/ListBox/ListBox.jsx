import React from 'react';
import list1 from '../../assets/Listbox → Option.png'
import list2 from '../../assets/Listbox → Option (1).png'
import list3 from '../../assets/Section → products-rightview.jpg.png'

const ListBox = () => {
    return (
        <div className='grid grid-cols-4 gap-3 container mx-auto mb-10'>
            <img className='rounded-xl h-[400px] w-full' src={list1} alt="" />
            <img className='rounded-xl h-[400px] w-full' src={list2} alt="" />
            <div style={{
                backgroundImage:`url(${list3})`,
                background:'cover',
                 backgroundPosition: "center",
                 height: "400px",
            }} className='rounded-xl h-[400px] w-full col-span-2'>
                
                <div className=' absolute right-40 mt-30'>
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
        </div>
    );
};

export default ListBox;