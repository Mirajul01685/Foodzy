import React, { useContext, useState } from 'react';
import logo from '../../src/assets/Page-1 1.png'
import PageName from '../Component/PageName/PageName';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import { auth } from '../../firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../Context/AuthContext';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const {createUser} =useContext(AuthContext)
   
    

    const handlesubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ email, password });
        if (!email && !password) {
            return setError("Email and password are required")
        }

        createUser( email, password)
            .then(res => console.log((res.user)))

            .catch(err => console.log(err))
    }





    return (
        <div className='mt-10'>
            <PageName></PageName>
            <div className='border border-black/10 rounded-lg w-full md:w-[800px] px-5 mt-10 container mx-auto space-y-3 '>
                <div className='flex items-center justify-center'>
                    <img className='w-20 h-20' src={logo} alt="Foodzy Logo" />
                    <div>
                        <h1 className='text-[24px] font-black'>Foodzy</h1>
                        <h1 className='text-[12px] font-semibold'>A Treasure Of Tastes</h1>
                    </div>
                </div>

                <form onSubmit={handlesubmit} >
                    <div className='md:flex gap-4 justify-center items-center'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">First Name*</legend>
                            <input type="text" className="input w-[350px]" placeholder="Enter Your First Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl">Last Name*</legend>
                            <input type="text" className="input w-[350px]" placeholder="Enter Your Last Name" />
                        </fieldset>

                    </div>

                    <div className='md:flex gap-4 justify-center items-center'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Email Address*</legend>
                            <input type="text" name='email' required className="input w-[350px] focus:outline-0 focus:border-primary" placeholder="Enter Your Email" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl">Phone Number*</legend>
                            <input type="text" className="input w-[350px]" placeholder="Enter Your Phone Number" />
                        </fieldset>

                    </div>

                    <div className='md:flex gap-4 justify-center items-center'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Address*</legend>
                            <input type="text" className="input w-[350px] md:w-[716px]" placeholder="Enter Your Email" />
                        </fieldset>
                    </div>

                    <div className='md:flex gap-4 justify-center items-center'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">City*</legend>
                            <input type="text" className="input w-[350px]" placeholder="City" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl">Post Code*</legend>
                            <input type="text" className="input w-[350px]" placeholder="Post Code" />
                        </fieldset>

                    </div>

                    <div className='md:flex gap-4 justify-center items-center'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Country*</legend>
                            <input type="text" className="input w-[350px]" placeholder="Country" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl">Region State*</legend>
                            <input type="text" className="input w-[350px]" placeholder="Region/State" />
                        </fieldset>
                    </div>
                    <div className='md:flex gap-4 justify-center items-center'>
                        <fieldset className="fieldset relative">
                            <legend className="fieldset-legend text-xl">Create a Password*</legend>
                            <input type={showPassword ? 'text' : "password"} name='password' className="input w-[350px] md:w-[716px] focus:outline-0 focus:border-primary " placeholder="Enter Your Password" />
                            <div onClick={() => setShowPassword(prev => !prev)} className=' z-50 absolute right-3 top-4 text-xl' >
                                {
                                    showPassword ? <IoMdEyeOff /> : <IoIosEye />
                                }
                            </div>
                        </fieldset>
                    </div>
                    <p className="my-2 text-red-500 ">{error}</p>






                    <div className='flex justify-between px-8 my-5 '>
                        <button type='submit' className="btn btn-primary join-item text-lg">{" "} Signup</button>
                        <h1 className='text-lg text-[#7a7a7a]'>Have an account?</h1>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default SignUp;