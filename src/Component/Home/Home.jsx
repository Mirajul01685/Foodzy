import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import PopularProducts from '../PopularProducts/PopularProducts';
import BannerDiscount from '../BannerDiscount/BannerDiscount';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import News from '../News/News';
import ListBox from '../ListBox/ListBox';
import Deals from '../Deals/Deals';

const Home = () => {
    return (
        <div >
         
          <Banner></Banner>
          <Discount></Discount>
          {/* <PopularProducts></PopularProducts> */}
          {/* <BannerDiscount></BannerDiscount>
          <Service></Service>
          <Deals></Deals>
          <ListBox></ListBox>
          <Testimonial></Testimonial>
          <News></News> */}
        
          
        </div>
    );
};

export default Home
