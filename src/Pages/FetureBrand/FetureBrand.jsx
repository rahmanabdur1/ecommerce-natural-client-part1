import React from 'react';
import './FetureBrand.css';
import fetureimg1 from '../../assets/web3.jpg';
import fetureimg2 from '../../assets/5.jpg';
import fetureimg3 from '../../assets/6.jpg';
import fetureimg4 from '../../assets/4-1.jpg';

const FetureBrand = () => {
    return (
        <div>
              <h2 className='ftitle'>Featured By Brand Organic</h2>
            <div className='feture'>
          
            <div className='feture1'>
                <img src={fetureimg1} alt='Feature 1' />
            </div>
            <div className='feture2'>
                <div className='fetureWGImg'>
                    <img src={fetureimg3} alt='Feature 2' />
                    <img src={fetureimg2} alt='Feature 3' />
                </div>
                <div className='fetureImg4'>
                    <img src={fetureimg4} alt='Feature 4' />
                </div>
            </div>
        </div>
        </div>
    );
};

export default FetureBrand;
