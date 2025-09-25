import React, { useState } from 'react';
import faqimg from '../../assets/faq.img.png'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { NavLink } from 'react-router';
import PageName from '../PageName/PageName';

const faqs = [
    {
        question: "What Facilities Does Your Hotel Have?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus."
    },
    {
        question: "How Do I Book A Room For My Vacation?",
        answer: "You can book directly through our website or contact our reservation team for assistance."
    },
    {
        question: "How We are best among others?",
        answer: "We stand out for our premium services, customer care, and unbeatable location."
    },
    {
        question: "Is There Any Fitness Center In Your Hotel?",
        answer: "Yes, we have a fully equipped fitness center available for all guests."
    },
    {
        question: "What Type Of Room Service Do You Offer?",
        answer: "We offer 24/7 room service including food, beverages, and housekeeping."
    }
];

const Faq = () => {

    const [selectArrow, SetSellectArrow] = useState()
    


    return (




        <div>
            
            <div>
                <PageName></PageName>
            </div>
            <div className='container mx-auto '>
                <div className='grid md:grid-cols-2 w-full md:w-fit container mx-auto  mt-10'>
                    <div className='w-full mb-10 md:mb-0 md:w-fit '>
                        <img src={faqimg} className='rounded-xl ' alt="FAQ" />
                    </div>
                    <div className='grid gap-2 px-4 '>
                        {
                            faqs.map((item, index) => (
                                <div key={index} className='border md:w-[600px] p-4 rounded-xl'>
                                    <h1
                                        className='flex justify-between items-center cursor-pointer font-semibold'
                                        onClick={() => SetSellectArrow(index)}
                                    >
                                        {item.question}
                                        <span className='text-xl'>
                                            {selectArrow === index ? <BiChevronUp /> : <BiChevronDown />}
                                        </span>
                                    </h1>


                                    {selectArrow === index && (
                                        <div className='mt-2 text-gray-600'>
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Faq;