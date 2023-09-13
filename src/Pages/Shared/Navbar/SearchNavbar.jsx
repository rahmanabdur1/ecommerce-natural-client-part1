import React from 'react';
import './SearchNavbar.css';
import logo from '../../../assets/logo.png.webp';
import { BsCartDash } from 'react-icons/bs';
import { RiAccountPinCircleFill } from 'react-icons/ri';

const SearchNavbar = () => {
    return (
        <div className='sernav'>
            <img src={logo} alt="" />
            <div className='search'>
                <input type='text' placeholder=' I am searching for...' />
                <button>SEARCH</button>
            </div>
            <div className='cartaccount'>
            <div className='cart'>
                <BsCartDash size={50} color="#a9d451" />
            </div>
            <div className='account'>
                <RiAccountPinCircleFill size={50} color="#228b22" />
            </div>
            </div>
        </div>
    );
};

export default SearchNavbar;
