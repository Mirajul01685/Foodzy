import { Stack } from '@mui/material'
import product1 from '../assets/products.1.png'
import product2 from '../assets/products.2.png'
import product3 from '../assets/products.3.png'
import product4 from '../assets/products.4.png'
import product5 from '../assets/products.5.png'
import product6 from '../assets/products.6.png'
import CartImg from '../assets/cartImg.png'
import Rating from '@mui/material/Rating';
import { RiPokerHeartsLine } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import React from 'react';


export const products = [
    {
        img: <img className='' src={product1} alt="" />,
        title: "Fresh organic villa farm lemon 500gm pack",
        subtitle: "Vegetables",
        originalPrice: "123.25",
        discountedPrice: "120.25",
        rating: 4.5,
        ratingStar: <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        </Stack>

    },
    {
        img: <img className='' src={product2} alt="" />,
        title: "Best snacks with hazel nut pack 200gm",
        subtitle: "Snacks",
        originalPrice: "150",
        discountedPrice: 145,
        rating: 4.0,
        ratingStar: <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
        </Stack>
    },
    {
        img: <img className='' src={product3} alt="" />,
        title: "Fresh organic apple 1kg simla marming",
        subtitle: "Fruits",
        originalPrice: "123.25",
        discountedPrice: "120.25",
        rating: 4.5,
        ratingStar: <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        </Stack>
    },
    {
        img: <img className='' src={product4} alt="" />,
        title: "Organic fresh venila farm watermelon 5kg",
        subtitle: "Fruits",
        originalPrice: "72.60",
        discountedPrice: "50.30",
        rating: 4.2,
        ratingStar: <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        </Stack>
    },
    {
        img: <img className='' src={product5} alt="" />,
        title: "Sweet crunchy nut mix 250gm pack",
        subtitle: "Snacks",
        originalPrice: "123.25",
        discountedPrice: "120.25",
        rating: 3.9,
        ratingStar: <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
        </Stack>
    },
    {
        img: <img className='' src={product6} alt="" />,
        title: "Delicious white baked fresh bread and toast",
        subtitle: "Bakery",
        originalPrice: "22.10",
        discountedPrice: "20",
        rating: 4.3,
        ratingStar: <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        </Stack>
    }
];