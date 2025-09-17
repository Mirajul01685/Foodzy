import React from 'react';
import logo from '../../src/assets/Page-1 1.png'

const Login = () => {
    return (
      <div>
        
          <div className='border border-black/10 rounded-lg w-[500px] px-5 container mx-auto '>
            <div className='flex items-center justify-center'>
                <img className='w-20 h-20' src={logo} alt="Foodzy Logo" />
                <div>
                    <h1 className='text-[24px] font-black'>Foodzy</h1>
                    <h1 className='text-[12px] font-semibold'>A Treasure Of Tastes</h1>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl ">Email Address*</legend>
                <input type="text" className="input w-[400px]" placeholder="Enter Your Email" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl">Password*</legend>
                <input type="text" className="input w-[400px]" placeholder="Enter Your Password" />
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
                 <button className="btn btn-primary join-item text-lg">Login</button>
                 <h1 className='text-lg text-[#7a7a7a]'>Signup?</h1>
            </div>

        </div>
      </div>
    );
};

export default Login;