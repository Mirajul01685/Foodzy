import React from 'react';
import news1 from '../../assets/news-1.png';
import news2 from '../../assets/news-2.png';
import news3 from '../../assets/news-3.png';

const News = () => {
    return (
        <div className='m-10'>
            <div>
                <div className='text-center'>
                    <h1 className='font-libre font-bold text-4xl text-[#2B2B2D]'> Lates News</h1>
                    <h1 className='font-poppins font-regular text-lg text-[#7A7A7A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque <br /> assumenda ex amet qui atque?
                    </h1>
                </div>
            </div>

            <div className='grid md:grid-cols-3 gap-3 container mx-auto mt-10'>

                <div className='border border-black/10 rounded-xl  '>
                    <div className='p-10'>
                        <h1 className=' text-lg text-[#7a7a7a] font-poppins font-regular'> By Admin |  Food</h1>
                        <h1 className='text-xl text-black font-semibold font-poppins'>Best guide to Shopping for organic <br />
                            ingredients. </h1>
                        <h1 className='text-lg text-[#64B496] font-bold font-libre'>Read More</h1>
                    </div>
                    <div className=' relative '>
                        <div>
                            <img className='w-full' src={news3} alt="" />
                        </div>

                        <div className=' absolute border p-3 bg-black/80 rounded-xl bottom-10 right-10'>
                        <h1 className='text-white'>10</h1>
                        <h1 className='text-white'>Oct</h1>
                    </div>

                    </div>
                    
                </div>

                <div className='border border-black/10 rounded-xl  '>
                    <div className='p-10'>
                        <h1 className=' text-lg text-[#7a7a7a] font-poppins font-regular'> By Admin | Snacks</h1>
                        <h1 className='text-xl text-black font-semibold font-poppins'>Cursus at elit vestibulum urna pretium <br />
                            elit mauris. </h1>
                        <h1 className='text-lg text-[#64B496] font-bold font-libre'>Read More</h1>
                    </div>
                    <div className=' relative '>
                       <div>
                         <img className='w-full' src={news2} alt="" />
                       </div>
                       <div className=' absolute border p-3 bg-black/80 rounded-xl bottom-10 right-10 '>
                        <h1 className='text-white'>10</h1>
                        <h1 className='text-white'>Oct</h1>
                    </div>
                    </div>
                    
                </div>

                <div className='border border-black/10 rounded-xl  '>
                    <div className='p-10'>
                        <h1 className=' text-lg text-[#7a7a7a] font-poppins font-regular'> By Admin | Snacks</h1>
                        <h1 className='text-xl text-black font-semibold font-poppins'>Urna pretium elit mauris cursus at elit <br /> vestibulum </h1>
                        <h1 className='text-lg text-[#64B496] font-bold font-libre'>Read More</h1>
                    </div>
                    <div className=' relative '>
                        <div>
                            <img className='w-full' src={news1} alt="" />
                        </div>
                        <div className=' absolute border p-3 bg-black/80 rounded-xl bottom-10 right-10'>
                        <h1 className='text-white'>10</h1>
                        <h1 className='text-white'>Oct</h1>
                    </div>
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default News;