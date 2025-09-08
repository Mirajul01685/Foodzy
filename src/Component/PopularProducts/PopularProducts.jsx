import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import bannerLeft from '../../assets/popularProducts.banner-img.png'
import product1 from '../../assets/products.1.png'
import product2 from '../../assets/products.2.png'
import product3 from '../../assets/products.3.png'
import product4 from '../../assets/products.4.png'
import product5 from '../../assets/products.5.png'
import product6 from '../../assets/products.6.png'
import CartImg from '../../assets/cartImg.png'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const products = [
    {
        img: <img className='w-full h-[280px]' src={product1} alt="" />,
        title: "Fresh organic villa farm lemon 500gm pack",
        subtitle: "Vegetables",
        originalPrice: "$123.25",
        discountedPrice: "$120.25",
        rating: 4.5,
        ratingStar : <Stack spacing={1}>
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
                        ratingStar : <Stack spacing={1}>
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
                        ratingStar : <Stack spacing={1}>
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
                        ratingStar : <Stack spacing={1}>
                     {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                     <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                     </Stack>
},
{
    img: <img className='w-full h-[280px]' src={product5} alt="" />,
        title: "Sweet crunchy nut mix 250gm pack",
            subtitle: "Snacks",
                originalPrice: "$123.25",
                    discountedPrice: "$120.25",
                        rating: 3.9,
                        ratingStar : <Stack spacing={1}>
                     {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                     <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                     </Stack>
},
{
    img: <img className='w-full h-[280px]' src={product6} alt="" />,
        title: "Delicious white baked fresh bread and toast",
            subtitle: "Bakery",
                originalPrice: "$22.10",
                    discountedPrice: "$20",
                        rating: 4.3,
                        ratingStar : <Stack spacing={1}>
                     {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                     <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                     </Stack>
}
];


const PopularProducts = () => {
    return (
        <div className='container mx-auto py-5'>
            <div className='text-center'>
                <h1 className='font-libre font-bold text-4xl text-[#2B2B2D]'> Popular Products</h1>
                <h1 className='font-poppins font-regular text-lg text-[#7A7A7A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque <br /> assumenda ex amet qui atque?
                </h1>
            </div>
            <div className='flex gap-3 py-5'>
                <div className=''>
                    <h1 className='flex items-center gap-20 justify-between rounded  p-2 m-2 bg-black/5 text-primary'>All < FaArrowRight className='' /></h1>
                    <h1 className='flex items-center gap-20 justify-between rounded  p-2 m-2 bg-black/5'>Snack < FaArrowRight className='' /></h1>
                    <h1 className='flex items-center gap-20 justify-between rounded  p-2 m-2 bg-black/5'>Vegetable < FaArrowRight className='' /></h1>
                    <h1 className='flex items-center gap-20 justify-between rounded  p-2 m-2 bg-black/5'>Fruit < FaArrowRight className='' /></h1>
                    <h1 className='flex items-center gap-20 justify-between rounded  p-2 m-2 bg-black/5'>Bakery < FaArrowRight className='' /></h1>

                    <div className=' relative'>
                        <img className='w-[320px] h-[680px]' src={bannerLeft} alt="" />
                        <div className=' absolute right-0 top-30 left-5'>
                            <h1 className='text-white text-5xl font-semibold p-2 font-libre '>Juicy</h1>
                            <h1 className='text-[#F7E8AA] text-5xl p-2 font-black font-noto'>FRUITS</h1>
                            <h1 className='text-white text-xl p-2 font-regular font-poppins'>100% Natural</h1>
                            <button className='bg-primary rounded  p-3 my-3 px-5'>
                                <h1 className='text-white '>Shop Now</h1>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-3 '>
                    {
                        products.map((item, index) =>
                            <div key={index} className='text-center border-2 border-black/10 rounded-xl' >
                                <div className=' relative'>
                                    <h1 className='container mx-auto p-2 '>{item.img} </h1>
                                </div>
                                <div className=' absolute -mt-7 '>
                                    <img className=' flex pl-36 ' src={CartImg} alt="" />
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
    );
};

export default PopularProducts;