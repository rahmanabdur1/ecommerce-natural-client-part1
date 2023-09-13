import React from 'react';
import './FreeServiceDetails.css'
import { AiFillCar } from 'react-icons/ai';
import { TbSelect } from 'react-icons/tb';
import { TbDiscount } from 'react-icons/tb';
const FreeServiceDetails = () => {
    return (
        <div className='fsdContainer'>
            <div className='freeservice'>
                <div className='frees'>
                    <div className='icon'>
                        <AiFillCar className='ai' size={43} color="#32cd32" />
                    </div>
                    <div className='free'>
                        <h4>Fast & Free Delivery</h4>
                        <p>Free Home Delivery All Over Banglades</p>
                    </div>
                </div>
                <div className='frees'>
                    <div className='icon'>
                        <TbSelect size={43} color="#32cd32" />
                    </div>
                    <div className='free'>
                        <h4>Fast & Free Delivery</h4>
                        <p>Free Home Delivery All Over Banglades</p>
                    </div>
                </div>
                <div className='frees'>
                    <div className='icon'>
                        <TbDiscount size={43} color="#32cd32" />
                    </div>
                    <div className='free'>
                        <h4>Fast & Free Delivery</h4>
                        <p>Free Home Delivery All Over Banglades</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeServiceDetails;