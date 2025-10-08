import React, { useState } from 'react';
import PageName from '../PageName/PageName';
import { BiSolidSquare, BiSquare } from 'react-icons/bi';
import { IoMdGrid } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { products } from '../../Data/PopularProductData';
import { Link } from 'react-router';
import CartImg from '../../assets/cartImg.png'

const ProductShop = () => {
    const [openLeftSide , setOpenLeftSide] = useState(false)
   
    
    return (
        <div className='container mx-auto'>
            <PageName></PageName>
            <div className='grid md:grid-cols-4 mt-15 md:mt-0 '>
                {
                    openLeftSide?<div className='mt-10 w-[400px] ml-5 md:ml-0 md:w-[300px] h-fit border border-black/10 p-5 bg-black/1 rounded-lg'>
                    <div>
                        <h1 className=' text-2xl pb-3'>Product Category</h1>
                        <hr className='text-black/30 pb-3' />
                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <span className='text-black/30
                                    text-2xl'><BiSquare></BiSquare></span>
                                <p className='text-xl text-black/50'>Juice & Drinks</p>
                            </div>
                            <p className='text-xl text-black/50'>[20]</p>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <span className='text-black/30
                                    text-2xl'><BiSquare></BiSquare></span>
                                <p className='text-xl text-black/50'>Dairy & Milk</p>
                            </div>
                            <p className='text-xl text-black/50'>[54]</p>
                        </div>

                        <div className='flex justify-between pb-3'>
                            <div className='flex gap-3'>
                                <span className='text-black/30
                                    text-2xl'><BiSquare></BiSquare></span>
                                <p className='text-xl text-black/50'>Snack & Spice</p>
                            </div>
                            <p className='text-xl text-black/50'>[64]</p>
                        </div>

                        <div>
                            <h1 className=' text-2xl pb-3'>Filter By Price</h1>
                            <hr className='text-black/30 pb-3' />
                            <input type="range" min={0} max="100" className="range  range-primary" />
                            <div className='flex gap-3'>
                                <p className='font-bold text-lg'>Price:</p>
                                <p className='text-lg font-bold text-black/50'>$20 - $250</p>

                            </div>
                            <button className='bg-primary p-3 px-5 rounded-lg pt-2 mt-4'>
                                <h1 className='text-white'>Filter</h1>
                            </button>

                        </div>

                        <h1 className=' text-2xl pb-3 mt-5'>Product Category</h1>
                        <hr className='text-black/30 pb-3' />
                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <span className='text-black/30
                                    text-2xl'><BiSquare></BiSquare></span>
                                <p className='text-xl text-black/50'>Blue</p>
                            </div>
                            <p className='text-2xl text-blue-400 rounded-xl'> <BiSolidSquare></BiSolidSquare>  </p>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <span className='text-black/30
                                    text-2xl'><BiSquare></BiSquare></span>
                                <p className='text-xl text-black/50'>Yellow</p>
                            </div>
                            <p className='text-2xl text-yellow-300 rounded-xl'> <BiSolidSquare></BiSolidSquare>  </p>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <span className='text-black/30
                                    text-2xl'><BiSquare></BiSquare></span>
                                <p className='text-xl text-black/50'>Red</p>
                            </div>
                            <p className='text-2xl text-red-500 rounded-xl'> <BiSolidSquare></BiSolidSquare>  </p>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <span className='text-black/30
                                    text-2xl'><BiSquare></BiSquare></span>
                                <p className='text-xl text-black/50'>Green</p>
                            </div>
                            <p className='text-2xl text-green-500 rounded-xl'> <BiSolidSquare></BiSolidSquare>  </p>
                        </div>

                        <h1 className=' text-2xl pb-3 mt-5'>Weight</h1>
                        <hr className='text-black/30 pb-3' />
                        <div className='flex gap-3'>
                            <span className='text-black/30
                                    text-2xl'><BiSquare></BiSquare></span>
                            <p className='text-xl text-black/50'>2Kg Pack</p>
                        </div>

                        <div className='flex gap-3'>
                            <span className='text-black/30
                                    text-2xl'><BiSquare></BiSquare></span>
                            <p className='text-xl text-black/50'>20Kg Pack</p>
                        </div>

                        <div className='flex gap-3'>
                            <span className='text-black/30
                                    text-2xl'><BiSquare></BiSquare></span>
                            <p className='text-xl text-black/50'>30Kg Pack</p>
                        </div>

                        <h1 className=' text-2xl pb-3 mt-5'>Products Tages</h1>
                        <hr className='text-black/30 pb-3' />

                        <div className='flex gap-4'>
                            <button className='bg-black/5 p-3 px-5 rounded-lg pt-2 mt-4'>
                                <h1 className='text-black/60 text-lg font-semibold'>Vegetables</h1>
                            </button>

                            <button className='bg-black/5 p-3 px-5 rounded-lg pt-2 mt-4'>
                                <h1 className='text-black/60 text-lg font-semibold'>Juice</h1>
                            </button>
                        </div>

                        <div className='flex gap-4'>
                            <button className='bg-black/5 p-3 px-5 rounded-lg pt-2 mt-4'>
                                <h1 className='text-black/60 text-lg font-semibold'>Food</h1>
                            </button>

                            <button className='bg-black/5 p-3 px-5 rounded-lg pt-2 mt-4'>
                                <h1 className='text-black/60 text-lg font-semibold'>Dry Fruits</h1>
                            </button>
                        </div>

                        <div className='flex gap-4'>
                            <button className='bg-black/5 p-3 px-5 rounded-lg pt-2 mt-4'>
                                <h1 className='text-black/60 text-lg font-semibold'>Vegetables</h1>
                            </button>

                            <button className='bg-black/5 p-3 px-5 rounded-lg pt-2 mt-4'>
                                <h1 className='text-black/60 text-lg font-semibold'>Juice</h1>
                            </button>
                        </div>
                    </div>
                </div> : ""
                }
                

                <div className={`mt-10  ${openLeftSide? 'col-span-3':'col-span-4'}`}>

                    <div className='  flex justify-between p-3 px-5 bg-black/5 rounded-lg '>
                        <div className='flex text-3xl  gap-3 '>
                            <IoMdGrid onClick={()=> setOpenLeftSide(prev=>!prev)} className={` ${openLeftSide?'bg-primary text-white':'bg-white text-[#7a7a7a] text-4xl'}`}></IoMdGrid>
                            <CiBoxList className={` ${openLeftSide?' text-balck':'bg-primary text-white text-4xl'}`}></CiBoxList>
                            <p className='text-2xl pl-6 text-[#7a7a7a]'>We found 29 items for you!</p>
                        </div>
                        <div className=' flex text-2xl items-center bg-white px-3 rounded-lg'>
                            <p className='text-[#7a7a7a]'>Sort By :  Featured </p>
                            <span className='text-[#7a7a7a] text-2xl'><MdKeyboardArrowDown /> </span>
                        </div>
                    </div>

                   <Link to={"/product/1"}>
                   <div className={`grid  gap-3 mt-10 ${openLeftSide?'md:grid-cols-3':'md:grid-cols-4'}`}>
                        {
                            products.map((item, index) =>
                              
                                    <div key={index} className='text-center border-2 border-black/10 rounded-xl' >
                                        <div className=' relative'>
                                            <h1 className='container mx-auto p-2 w-[300px] h-[280px] '>{item.img} </h1>
                                        </div>
                                        <div className=' absolute translate-x-1/2 -mt-3 '>
                                            <img className=' flex pl-31 md:pl-25 ' src={CartImg} alt="" />
                                        </div>
                                        <div className='p-3 mt-5'>
                                            <h1 className='text-lg font-libre text-[#777777]'>{item.subtitle}</h1>
                                            <div className='flex items-center justify-center gap-3'>
                                                <h1>{item.ratingStar}</h1>
                                                <h1>({item.rating})</h1>


                                            </div>
                                            <h1 className='text-lg font-medium font-poppins'>{item.title}</h1>

                                            <div className='flex gap-2 justify-center pt-2 items-center'>
                                                <h1 className='text-2xl font-poppins font-bold text-[#F53E32]'>{item.discountedPrice}</h1>
                                                <h1 className='line-through text-lg text-[#7A7A7A] font-poppins font-regular'>{item.originalPrice}</h1>
                                            </div>
                                        </div>
                                    </div>
                                
                            )
                        }
                    </div>
                    </Link>
                    <div className={`w-full md:w-0    p-10 ${openLeftSide?'px-[30%]  ':'px-[40%] '}`} >
                <div className='container flex justify-center items-center mx-auto  border border-black/10 w-fit rounded-xl'>
                    <button className=" text-[#7a7a7a] p-3 text-md md:text-lg px-3 md:px-6 ">Previous</button>
                <button className=" text-white bg-primary p-3 text-md md:text-lg px-3 md:px-6 ">1</button>
                <button className=" text-[#7a7a7a] p-3 text-md md:text-lg px-3 md:px-6 ">2</button>
                <button className=" text-[#7a7a7a] p-3 text-md md:text-lg px-3 md:px-6 ">3</button>
                <button className=" text-[#7a7a7a] p-3 text-md md:text-lg px-3 md:px-6 ">Next</button>
                </div>
            </div>
                </div>
            </div>



        </div>
    );
};

export default ProductShop;