import React from 'react';
import { useLocation } from 'react-router';

const PageName = () => {
    const { pathname } = useLocation();  // Fix the typo here
    const newPathName = pathname.slice(1);
    

    return (
        <div className='bg-primary'>
            <div className='container capitalize flex justify-between text-white font-bold mx-auto p-5 px-20  text-xl'> 
                <p>{newPathName || ""}</p>
                <p>Home - {newPathName || ""}</p>
            </div>
        </div>
    );
};

export default PageName;
