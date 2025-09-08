import React from 'react';
import logo from '../../assets/Page-1 1.png'
import { FaSearch } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';
import { NavLink } from 'react-router';

const MobileHeader = () => {
    const route = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Product", link: "/product" },
        { name: "Blog", link: "/blog" },
        { name: "FAQ", link: "/FAQ" },
    ]
    return (
        <div className='md:hidden fixed top-0  z-9999 bg-primary'>
            <div className='  flex justify-between items-center text-white px-4'>
                <div className='flex items-center'>
                    <img className='w-20 h-20' src={logo} alt="Foodzy Logo" />
                    <div>
                        <h1 className='text-[24px] font-black'>Foodzy</h1>
                        <h1 className='text-[12px] font-semibold'>A Treasure Of Tastes</h1>
                    </div>
                </div>

                <div className='flex gap-3 text-2xl items-center'>
                    <FaSearch></FaSearch>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-field"><RiMenu3Fill className='text-2xl'></RiMenu3Fill></div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-36 p-2 shadow-sm text-black">
                            <ul className='flex justify-center items-center  flex-col gap-5'>
                                {
                                    route.map((item, index) => (
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
                        </ul>
                    </div>
                </div>


            </div>

            <div className=' pb-3 px-10'>
                <label className="input w-full">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>





        </div>
    );
};

export default MobileHeader;