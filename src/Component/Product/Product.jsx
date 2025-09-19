import React from 'react';
import PageName from '../PageName/PageName';
import { BiSolidSquare } from 'react-icons/bi';
import { BiSquare } from 'react-icons/bi';
import product1 from '../../assets/products.1.png'
import product2 from '../../assets/products.2.png'
import product3 from '../../assets/products.3.png'
import product4 from '../../assets/products.4.png'
import product5 from '../../assets/products.5.png'
import product6 from '../../assets/products.6.png'
import Listbox1 from '../../assets/Listbox → Option (0).png'
import Listbox2 from '../../assets/Listbox → Option (01).png'
import Listbox3 from '../../assets/Listbox → Option (2).png'
import Listbox4 from '../../assets/Listbox → Option (3).png'
import Listbox5 from '../../assets/Listbox → Option (4).png'
import { RiPokerHeartsLine } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import CartImg from '../../assets/cartImg.png'



const products = [
    {
        img: <img className='w-full h-[280px]' src={product1} alt="" />,
        title: "Fresh organic villa farm lemon 500gm pack",
        subtitle: "Vegetables",
        originalPrice: "$123.25",
        discountedPrice: "$120.25",
        rating: 4.5,
        ratingStar: <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        </Stack>

    },
    {
        img: <img className='w-full h-[280px]' src={product2} alt="" />,
        title: "Best snacks with hazel nut pack 200gm",
        subtitle: "Snacks",
        originalPrice: "$150",
        discountedPrice: "$145",
        rating: 4.0,
        ratingStar: <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
        </Stack>
    },
    {
        img: <img className='w-full h-[280px]' src={product3} alt="" />,
        title: "Fresh organic apple 1kg simla marming",
        subtitle: "Fruits",
        originalPrice: "$123.25",
        discountedPrice: "$120.25",
        rating: 4.5,
        ratingStar: <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        </Stack>
    },
    {
        img: <img className='w-full h-[280px]' src={product4} alt="" />,
        title: "Organic fresh venila farm watermelon 5kg",
        subtitle: "Fruits",
        originalPrice: "$72.60",
        discountedPrice: "$50.30",
        rating: 4.2,
        ratingStar: <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        </Stack>
    },

];

const Product = () => {
    return (
        <div className='container mx-auto'>
            <PageName></PageName>
            <div className='  relative'>
                <div className='grid grid-cols-3 mt-20'>
                    <div className='w-[300px] border border-black/10 p-5 bg-black/1 rounded-lg  ' >
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
                                <input type="range" min={0} max="100" value="auto" className="range  range-primary" />
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
                    </div>

                    <div className=' -ml-45 rounded-xl w-fit h-fit  '>
                        <img className='w-[550px]' src={product2} alt="" />
                        <div className='flex gap-2 mt-5 mb-8 '>
                            <img className='w-26' src={Listbox1} alt="" />
                            <img className='w-26' src={Listbox2} alt="" />
                            <img className='w-26' src={Listbox3} alt="" />
                            <img className='w-26' src={Listbox4} alt="" />
                            <img className='w-26' src={Listbox5} alt="" />

                        </div>
                    </div>

                    <div className='border border-black/10 -ml-30 rounded-xl p-7 h-fit space-y-4'>
                        <h1 className='font-libre text-2xl '>Seeds Of Change Oraganic Quinoa, Brown</h1>
                        <h1 className='font-poppins text-lg text-[#7a7a7a]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
                            minus error doloribus saepe natus?</h1>
                        <hr className='text-black/30' />
                        <div className='flex gap-3'>
                            <Stack spacing={1}>
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </Stack>
                            <p>( 75 Review )</p>
                        </div>

                        <div className='flex items-center '>
                            <h1 className='font-black text-xl font-libre'>Brand </h1>
                            <p className='text-[#7a7a7a] pl-10 text-md font-medium'>: ESTA BETTERU CO</p>
                        </div>
                        <div className='flex items-center '>
                            <h1 className='font-black text-xl font-libre'>Flavour </h1>
                            <p className='text-[#7a7a7a] pl-7 text-md font-medium'>: Super Saver Pack</p>
                        </div>
                        <div className='flex items-center '>
                            <h1 className='font-black text-xl font-libre'>Diet Type </h1>
                            <p className='text-[#7a7a7a] pl-4 text-md font-medium'>: Vegetarian</p>
                        </div>
                        <div className='flex items-center '>
                            <h1 className='font-black text-xl font-libre'>Weight </h1>
                            <p className='text-[#7a7a7a] pl-9 text-md font-medium'>: 200 Grams</p>
                        </div>
                        <div className='flex items-center '>
                            <h1 className='font-black text-xl font-libre'>Speciality </h1>
                            <p className='text-[#7a7a7a] pl-3.5 text-md font-medium'>: Gluten Free, Suger Free</p>
                        </div>
                        <div className='flex items-center '>
                            <h1 className='font-black text-xl font-libre'>Info </h1>
                            <p className='text-[#7a7a7a] pl-16 text-md font-medium'>: Egg Free ,Allergen-Free</p>
                        </div>
                        <div className='flex items-center '>
                            <h1 className='font-black text-xl font-libre'>Items </h1>
                            <p className='text-[#7a7a7a] pl-13 text-md font-medium'>: 1</p>
                        </div>

                        <div className='flex gap-2  pt-2 items-center'>
                            <h1 className='text-2xl font-poppins font-bold text-[#F53E32]'>$120.25</h1>
                            <h1 className='line-through text-lg text-[#7A7A7A] font-poppins font-regular'>$123.25</h1>
                        </div>

                        <div className='flex  gap-3 items-center mt-5'>
                            <h1>Size/Weight :</h1>
                            <button className='bg-primary text-white px-2  rounded-md '>50kg</button>
                            <button className=' bg-black/5 text-[#7a7a7a] px-2  rounded-md '>80kg</button>
                            <button className=' bg-black/5 text-[#7a7a7a] px-2  rounded-md '>120kg</button>
                            <button className=' bg-black/5 text-[#7a7a7a] px-2 rounded-md '>200kg</button>
                        </div>

                        <div className='flex gap-1 mt-5 items-center '>
                            <button className='bg-black/5 rounded-md p-3 px-4'>1</button>
                            <div className='flex flex-col gap-1 '>
                                <button className='bg-black/5 rounded-md px-1'>+</button>
                                <button className='bg-black/5 rounded-md px-1 '>-</button>
                            </div>

                            <button className=' ml-3 bg-primary rounded  p-3 my-3 px-5'>
                                <h1 className='text-white '>Add to Cart</h1>
                            </button>

                            <button className='  ml-3  bg-black/5 rounded-md p-3 px-4'><RiPokerHeartsLine className='text-xl' /></button>
                            <button className='   ml-3 bg-black/5 rounded-md p-3 px-4'><  IoMdEye className='text-xl' /></button>

                        </div>

                    </div>
                </div>
            </div>
            <div className=' absolute inset-x-[27%] w-[64%] -bottom-[50%] rounded-lg p-4 border border-black/10'>
                <div className='flex gap-5 items-center'>
                    <h1 className='font-semibold text-xl'>Description</h1>
                    <h1 className='font-semibold text-xl'>Review</h1>
                </div>
                <hr className='text-black/10 mt-3' />
                <p className='mt-2 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora deleniti, dolorem ducimus accusamus quibusdam quisquam iste earum magni velit, cumque necessitatibus vel odio natus culpa? Dolorum asperiores nemo quia.accusamus quibusdam quisquam iste earum magni velit, cumque necessitatibus vel odio natus culpa? Dolorum asperiores nemo quia.</p>

                <div className='flex gap-5 items-center mt-3'>
                    <h1 className='font-semibold text-xl'>Packing & Delivery</h1>

                </div>
                <hr className='text-black/10 mt-3' />
                <p className='mt-2 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora deleniti, dolorem ducimus accusamus quibusdam quisquam iste earum magni velit, cumque necessitatibus vel odio natus culpa? Dolorum asperiores nemo quia.accusamus quibusdam quisquam iste earum magni velit, cumque necessitatibus vel odio natus culpa? Dolorum asperiores nemo quia.</p>
            </div>

            <div className='mt-25'>
                <div className='text-center'>
                    <h1 className='font-libre font-bold text-4xl text-[#2B2B2D]'> Popular Products</h1>
                    <h1 className='font-poppins font-regular text-lg text-[#7A7A7A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque <br /> assumenda ex amet qui atque?
                    </h1>
                    <div className='grid md:grid-cols-4 gap-3 mt-10'>
                        {
                            products.map((item, index) =>
                                <div key={index} className='text-center border-2 border-black/10 rounded-xl' >
                                    <div className=' relative'>
                                        <h1 className='container mx-auto p-2 w-full h-[280px] '>{item.img} </h1>
                                    </div>
                                    <div className=' absolute translate-x-1/2 -mt-7 '>
                                        <img className=' flex pl-42 md:pl-25 ' src={CartImg} alt="" />
                                    </div>
                                    <div className='p-3'>
                                        <h1 className='text-lg font-libre text-[#777777]'>{item.subtitle}</h1>
                                        <div className='flex items-center justify-center gap-3'>
                                            <h1>{item.ratingStar}</h1>
                                            <h1>({item.rating})</h1>


                                        </div>
                                        <h1 className='text-xl font-medium font-poppins'>{item.title}</h1>

                                        <div className='flex gap-2 justify-center pt-2 items-center'>
                                            <h1 className='text-2xl font-poppins font-bold text-[#F53E32]'>{item.discountedPrice}</h1>
                                            <h1 className='line-through text-lg text-[#7A7A7A] font-poppins font-regular'>{item.originalPrice}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Product;