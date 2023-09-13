import React from 'react';
import './NaturalSummary.css';
import { Link } from 'react-router-dom';

const NaturalSummary = ({ nature }) => {
    const { categoryname, name, fullname, offer, price, img, _id } = nature;

    return (     
        <div className='naturesummary'>
            <Link to={`/menuItem/${_id}`}>
                <span className='offer'>{offer}</span>
                <img src={img} className='img' alt='natural img' />
                <h4>{name}</h4>
                <h4>{price}</h4>
                <button>Add To Cart</button>
            </Link>
        </div>
    );
};

export default NaturalSummary;
