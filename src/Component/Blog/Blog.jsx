import React from 'react';
import blog1 from '../../assets/Section → blog-1.jpg.png'
import blog2 from '../../assets/Section → blog-2.jpg.png'
import blog3 from '../../assets/Section → blog-3.jpg.png'
import { FaArrowCircleRight } from "react-icons/fa";

const Blog = () => {
    return (
        <div className=' container mx-auto my-10 space-y-4'>
            <div >
                <img className='w-full h-[600px]'   src={blog1} alt="" />
            </div>
            <div className='mt-10'>
                <h1 className='text-xl font-semibold'><span className='text-primary'>By Admin</span> <span className='text-[#7a7a7a]'>/ 07 Comment / Date - 09,09,2024</span></h1>
            </div>
            <div>
                <h2 className='font-bold text-3xl'>Health Benefits of a Row food</h2>
                <p className='text-[#7a7a7a] text-lg my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, illo quia! Aut optio facilis, nulla esse fugiat voluptatem odio suscipit deserunt aspernatur obcaecati enim velit.Aut optio facilis, nulla esse fugiat voluptatem odio suscipit deserunt aspernatur obcaecati enim velit?</p>
                <p className='text-[#7a7a7a] text-lg my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, illo quia! Aut optio facilis, nulla esse fugiat voluptatem odio suscipit deserunt aspernatur obcaecati enim velit.Aut optio facilis, nulla esse fugiat voluptatem odio suscipit deserunt aspernatur obcaecati enim velit?</p>
            </div>
            <div className='flex gap-4 space-y-3'>
                <div className='w-full'>
                    <img className='w-full' src={blog3} alt="" />
                    <h1 className='flex gap-2 items-center mt-5' ><FaArrowCircleRight className='text-primary text-2xl' /> <span className='text-[#7a7a7a] font-semibold text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur adipisicing.</span> </h1>
                </div>
                
                 <div className='w-full'>
                    <img className='w-full' src={blog2} alt="" />
                    <h1 className='mt-5 flex gap-2 items-center' ><FaArrowCircleRight className='text-primary text-2xl' /> <span className='text-[#7a7a7a] font-semibold text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur adipisicing.</span> </h1>
                </div>
            </div>
            <div className='border border-black/5 rounded-xl mY-10 p-10'>
                <h1 className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, nisi praesentium perferendis voluptas quibusdam exercitationem sint animi modi natus, quasi dignissimos quos harum iste delectus itaque. Nulla architecto nobis dignissimos?</h1>
                <h2 className='text-primary font-bold text-3xl mt-5'>John Martin</h2>
            </div>
            <div>
                <h1 className='text-[#7a7a7a] text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi itaque numquam facere sunt perspiciatis maiores temporibus quasi rerum ipsam, asperiores voluptatibus vel adipisci repellat impedit, inventore hic non! Consequuntur, eveniet!</h1>
            </div>
            <div className='border border-black/5 rounded-xl mY-10 p-10 space-x-4'>
                     <button className="border border-black/10 text-[#7a7a7a] p-3 text-lg px-6 rounded-xl ">Cabbage</button>
                     <button className="border border-black/10 text-[#7a7a7a] p-3 text-lg px-6 rounded-xl">Appetize</button>
                     <button className="border border-black/10 text-[#7a7a7a] p-3 text-lg px-6 rounded-xl">Meat Food</button>
            </div>
            <div className='  p-10' >
                <div className='container mx-auto  border border-black/10 w-fit rounded-xl'>
                    <button className=" text-[#7a7a7a] p-3 text-lg px-6 ">Previous</button>
                <button className=" text-white bg-primary p-3 text-lg px-6 ">1</button>
                <button className=" text-[#7a7a7a] p-3 text-lg px-6 ">2</button>
                <button className=" text-[#7a7a7a] p-3 text-lg px-6 ">3</button>
                <button className=" text-[#7a7a7a] p-3 text-lg px-6 ">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;