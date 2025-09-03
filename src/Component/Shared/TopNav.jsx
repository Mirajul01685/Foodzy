import React from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { NavLink } from 'react-router';

const TopNav = () => {
    const route =[
        {name:"Home",link:"/"},
        {name:"About",link:"/about"},
        {name:"Product",link:"/product"},
        {name:"Blog",link:"/blog"},
        {name:"FAQ",link:"/faq"},
    ]
    return (
        <div className='flex justify-around container mx-auto py-4 px-5'>
            <ul className='flex gap-5'>
                {
                    route.map((item,index)=>(
                        <NavLink
                         key={index}
                        to={item?.link}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-primary font-bold hover:scale-100 duration-300" : "hover:scale-110 duration-300"
                }>
                         {item.name}
                         </NavLink>
                    ))}
            </ul>
            <div className='flex gap-3 items-center'>
                <LuPhoneCall className='text-lg'/>
                +880 1711223300 
            </div>
        </div>
    );
};

export default TopNav;