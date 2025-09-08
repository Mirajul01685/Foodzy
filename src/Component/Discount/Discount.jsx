import React, { useState } from 'react';
import cake from '../../assets/Section → Tabpanel-left.png'
import cakeUp from '../../assets/Section → Tabpanel (1).png'
import milk from '../../assets/Section → Tabpanel-Right.png'

const categories = [
    { title: "Cake & Milk", subtitle: "(65 items)" },
    { title: "Fresh Meat", subtitle: "(30 items)" },
    { title: "Vegetables", subtitle: "(25 items)" },
    { title: "Apple & Mango", subtitle: "(45 items)" },
    { title: "Strawberry", subtitle: "(68 items)" },
    { title: "View More", subtitle: "" }
];


const Discount = () => {
    // const [isClickOpen, setIsClickOpen] = useState(false)
    const [ selectedCategory , setSelectedCategory] = useState("")

    console.log(selectedCategory)

    return (
        <div className=' grid grid-cols-3 gap-2 max-w-[1500px] mx-auto p-5'>
            <div className='w-full'>
                {
                    categories.map((item, index) => <div key={index}>
                        <div onClick={() => setSelectedCategory(item?.title)} className={` h-full mt-0 text-center p-5 bg-black/5 m-2 ${selectedCategory == item?.title ? ' text-primary' : ''} `}>
                            <h1>{item.title}</h1>
                            <h1>{item.subtitle}</h1>
                        </div>
                    </div>)
                }
            </div>

            <div className='w-full'>
                <div className='relative'>
                    <div className='relative'>
                        <div className='relative'>
                            <div>
                                <img className='w-full h-[550px] ' src={cake} alt="" />

                            </div>
                        </div>

                        <div className=' absolute -left-0 top-1  z-999'>
                            <img src={cakeUp} alt="" />

                        </div>
                    </div>

                    <div className=' absolute left-5 top-3'>
                        <div className='text-2xl text-white  flex items-center gap-2'>
                            <h1 className='text-5xl'>50</h1>
                            <div className='text-lg'>
                                <h1>%</h1>
                                <h1 className='leading-2'>OFF</h1>
                            </div>
                        </div>

                    </div>

                    <div className=' absolute left-1/2 -translate-x-1/2 bottom-20 text-center  '>
                        <h1 className='text-2xl text-white p-2'>Cake</h1>
                        <button className='bg-primary rounded w-full p-2'>
                            <h1 className='text-white '>Shop Now</h1>
                        </button>
                    </div>


                </div>



            </div>

            <div className='w-full'>
                <div className='relative'>
                    <div className='relative'>
                        <div className='relative'>
                            <div>
                                <img className='w-full  h-[550px]  ' src={milk} alt="" />

                            </div>
                        </div>

                        <div className=' absolute -left-0 top-0  z-999'>
                            <img src={cakeUp} alt="" />

                        </div>
                    </div>

                    <div className=' absolute left-5 top-3'>
                        <div className='text-2xl text-white  flex items-center gap-2'>
                            <h1 className='text-5xl'>40</h1>
                            <div className='text-lg'>
                                <h1>%</h1>
                                <h1 className='leading-2'>OFF</h1>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className=' absolute left-280 text-center  top-270'>
                    <h1 className='text-2xl text-white p-2'>Milk</h1>
                    <button className='bg-primary rounded w-full p-2'>
                        <h1 className='text-white '>Shop Now</h1>
                    </button>
                </div> */}
            </div>

        </div>
    );
};

export default Discount;