import React from 'react';
import PageName from '../PageName/PageName';
import Service from '../Service/Service'

const About = () => {
    return (
        <div className='container mx-auto mt-5'>
            <PageName></PageName>
           <div className='w-full md:w-[700px] p-2 md:p-0  mt-10'>
                <h2 className='font-bold text-3xl'>About The Carrot</h2>
                <p className='text-[#7a7a7a] text-lg my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, illo quia! Aut optio facilis, nulla esse fugiat voluptatem odio suscipit deserunt aspernatur obcaecati enim velit.Aut optio facilis, nulla esse fugiat voluptatem odio suscipit deserunt aspernatur obcaecati enim velit?</p>
                <p className='text-[#7a7a7a] text-lg my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, illo quia! Aut optio facilis, nulla esse fugiat voluptatem odio suscipit deserunt aspernatur obcaecati enim velit.Aut optio facilis, nulla esse fugiat voluptatem odio suscipit deserunt aspernatur obcaecati enim velit?</p>
                <p className='text-[#7a7a7a] text-lg my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, illo quia! Aut optio facilis, nulla esse fugiat voluptatem odio suscipit deserunt aspernatur obcaecati enim velit.Aut optio facilis, nulla esse fugiat voluptatem odio suscipit deserunt aspernatur obcaecati enim velit?</p>
                <div className='flex justify-evenly border border-black/10 bg-black/5 rounded-lg p-5'>
                <div>
                    <h2><span className='text-6xl font-bold text-primary'>0.1</span><span className='text-2xl text-[#7a7a7a]'>K</span></h2>
                    <p className='font-semibold px-3 text-lg'>Vendors</p>
                </div>
                <div>
                    <h2><span className='text-6xl font-bold text-primary'>0.1</span><span className='text-2xl text-[#7a7a7a]'>K</span></h2>
                    <p className='font-semibold px-3 text-lg'>Vendors</p>
                </div>
                <div>
                    <h2><span className='text-6xl font-bold text-primary'>0.1</span><span className='text-2xl text-[#7a7a7a]'>K</span></h2>
                    <p className='font-semibold px-3 text-lg'>Vendors</p>
                </div>
            </div>           
            </div>

            <Service/>
            
        </div>
    );
};

export default About