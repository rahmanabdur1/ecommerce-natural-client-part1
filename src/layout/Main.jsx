import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import SearchNavbar from '../Pages/Shared/Navbar/SearchNavbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <SearchNavbar/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;