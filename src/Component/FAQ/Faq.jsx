import React, { useState } from 'react';
import faqimg from '../../assets/faq.img.png'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

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
    // কোন question খোলা আছে তার index রাখব (null মানে কিছুই খোলা নেই)
    const [openIndex, setOpenIndex] = useState(null);

  

    return (
        <div className='flex container mx-auto'>
            <div className='w-full h-auto'>
                <img src={faqimg} className='w-full object-cover h-[350px]'  alt="FAQ" />
            </div>
            <div className='flex flex-col gap-2 px-4 w-full '>
                {
                    faqs.map((item, index) => (
                        <div key={index} className='border p-4 rounded'>
                            <h1 
                                className='flex justify-between items-center cursor-pointer font-semibold'
                                onClick={() => setOpenIndex(index)}
                            >
                                {item.question}
                                <span className='text-xl'>
                                    {openIndex === index ? <BiChevronUp /> : <BiChevronDown />}
                                </span>
                            </h1>

                            {/* শুধু current খোলা index এর answer show হবে */}
                            {openIndex === index && (
                                <div className='mt-2 text-gray-600'>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Faq;
