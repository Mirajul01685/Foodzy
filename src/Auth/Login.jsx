import React, { useState } from 'react';
import logo from '../../src/assets/Page-1 1.png'
import PageName from '../Component/PageName/PageName';
import { Link } from "react-router";
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({email,password});
        if (!email && !password) {
            return setError("Email and password are required")
        }
       
         
    }
       
    

    return (
        <div>
            <PageName></PageName>
            <div className='border mt-30  md:mt-10 border-black/10 rounded-lg w-full  md:w-[500px] md:px-5 px-4 container mx-auto  '>
                <div className='flex items-center justify-center max-w-lg w-full p-10 mb-10 bg-primary shadow-md '>
                    <img className='w-32 h-32 ' src={logo} alt="Foodzy Logo" />
                    <div>
                        <h1 className='text-[32px] text-white font-black'>Foodzy</h1>
                        <h1 className='text-[18px] text-white font-semibold'>A Treasure Of Tastes</h1>
                    </div>
                </div>

                <form onSubmit={handlesubmit}>
                    <div className='flex flex-col justify-center items-center'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Email Address*</legend>
                            <input type="text" name='email' required className="input w-[400px] focus:outline-0 focus:border-primary" placeholder="Enter Your Email" />
                        </fieldset>
                        <fieldset className="fieldset relative">
                            <legend className="fieldset-legend text-xl">Password*</legend>
                            <input type={showPassword ? 'text' : "password"} name='password' className="input w-[400px] focus:outline-0 focus:border-primary " placeholder="Enter Your Password" />
                            <div onClick={() => setShowPassword(prev => !prev)} className=' z-50 absolute right-3 top-4 text-xl' >
                                {
                                    showPassword ? <IoMdEyeOff /> : <IoIosEye />
                                }
                            </div>
                        </fieldset>

                    </div>
                    <div className='flex justify-between px-8 mt-5'>
                        <label className="label">
                            <input type="checkbox" defaultChecked className="checkbox" />
                            Remember me
                        </label>

                        <h1 className='text-lg text-[#7a7a7a]'>Forgot Password?</h1>

                    </div>

                    <div className='flex justify-between px-8 my-5 '>
                        <button type='submit' className="btn btn-primary join-item text-lg">Login</button>
                        <Link to={"/signup"} className='text-lg text-[#7a7a7a]'> Signup?</Link>
                    </div>
                    <p className="my-2 text-red-500 ">{error}</p>
                </form>

            </div>
        </div>
    );
};

export default Login;