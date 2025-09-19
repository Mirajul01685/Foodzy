import React from 'react';
import teamMember1 from '../../assets/teammember (1).png'
import teamMember2 from '../../assets/teammember (2).png'
import teamMember3 from '../../assets/teammember (3).png'
import bg from '../../assets/testimonial.bg.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';



const teamMembers = [
    {
        img: <img src={teamMember1} alt="" />,
        title: "Stephen Smith",
        subtitle: "Co Founder",
        description: "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”"
    },
    {
        img: <img src={teamMember2} alt="" />,
        title: "Lorem Robinson",
        subtitle: "Manager",
        description: "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”"
    },
    {
        img: <img src={teamMember3} alt="" />,
        title: "Saddika Alard",
        subtitle: "Team Leader",
        description: "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”"
    }
];


const Testimonial = () => {
    return (
        <div className='z-0'>
            <div className='text-center'>
                <h1 className='font-libre font-bold text-4xl text-[#2B2B2D]'> Great Words From People</h1>
                <h1 className='font-poppins font-regular text-lg text-[#7A7A7A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque <br /> assumenda ex amet qui atque?
                </h1>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                autoplay={
                    {
                        delay: 2000,
                    }
                }
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    Array.from({ length: 7 }).map(() =>
                        <SwiperSlide className='z-0'>
                            <div>
                                <div className='grid md:grid-cols-3 gap-3 mt-20 container mx-auto z-0'>
                                    {
                                        teamMembers.map((item, index) =>
                                            <div key={index} className=''>
                                                <div style={{
                                                    backgroundImage: `url(${bg})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                    height: "250px",
                                                }} className=' flex flex-col justify-center items-center p-5'>


                                                    <h1 className='-mt-32 pb-10'>{item.img}</h1>
                                                    <h1 className='text-lg text-[#7A7A7A] font-poppins font-regular'>{item.subtitle}</h1>
                                                    <h1 className='text-xl text-black/95 font-poppins font-bold'>{item.title}</h1>
                                                    <h1 className='text-lg text-[#7A7A7A] font-poppins font-regular'>{item.description}</h1>

                                                </div>
                                            </div>)
                                    }


                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }


            </Swiper>









        </div>
    );
};

export default Testimonial;