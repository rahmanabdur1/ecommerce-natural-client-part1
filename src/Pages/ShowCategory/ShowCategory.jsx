import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShowCategory.css'


const ShowCategory = () => {
    const [showCategories, setShowCategories] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/show-category')
                .then(res => res.json())
                .then(data => {
                    setShowCategories(data);

                });
        },);

    }, [])
    return (
        <div className='swcaContainer'>
                {showCategories.map(category => (
                    <Link to={`/category/${category.id}`} key={category.id}>
                        <img src={category.img} alt={category.name} />
                    </Link>
                ))}
            </div>
    );

}
export default ShowCategory;
