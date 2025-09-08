import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Shared/Header';
import Footer from '../Component/Footer/Footer';
import BottomMobileNav from '../Component/Shared/BottomMobileNav';
import MobileHeader from '../Component/Shared/MobileHeader';

const MainLayout = () => {
    return (
        <div>

            <div className='hidden md:block '>
                <Header></Header>
            </div>
            <MobileHeader ></MobileHeader>
            <Outlet></Outlet>
            <Footer></Footer>
            <div>
                {/* <BottomMobileNav></BottomMobileNav> */}
            </div>
        </div>
    );
};

export default MainLayout