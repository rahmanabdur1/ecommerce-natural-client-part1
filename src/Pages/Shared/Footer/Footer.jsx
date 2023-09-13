import React from 'react';
import './Footer.css'
import logo from '../../../assets/logo.png.webp';
const Footer = () => {
    return (
        <div className='footerContainer'>
                <div className='naturalLife'>
                    <img src={logo} alt='footer logo'/>
                    <h4>“Natural Life” is a best brand company for organic products. We sell only reputed organic products manufacturing company’s products. That’s why you can buy our products without hesitation.</h4>
                </div>
                <div className='contact'>
                    <h2>CONTACT INFO</h2>
                </div>
                <div className='usefulLink'>
                    <h2>USEFUL LINK</h2>
                </div>
                <div className='newsLetter'>
                    <h2>GET NEWSLETTER</h2>
                </div>
        </div>
    );
};

export default Footer;