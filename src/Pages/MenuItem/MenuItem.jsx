import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MenuItem.css';

const MenuItem = () => {
    const { id } = useParams();
    const [menuItem, setMenuItem] = useState(null);
    const [imageScale, setImageScale] = useState(1.0);
    const [transformOrigin, setTransformOrigin] = useState({ x: 0, y: 0 });

    useEffect(() => {
        fetch(`http://localhost:5000/menuItem/${id}`)
            .then(res => res.json())
            .then(data => {
                setMenuItem(data);
            });
    }, [id]);

    const handleMouseOver = () => {
        setImageScale(1.3);
        setTransformOrigin({ x: 50, y: 50 });
    };

    const handleMouseMove = (e) => {
        const img = document.getElementById('menuItemImage');

 
        const offsetX = (e.clientX - img.getBoundingClientRect().left) / img.offsetWidth * 100;
        const offsetY = (e.clientY - img.getBoundingClientRect().top) / img.offsetHeight * 100;

        setImageScale(2);
        setTransformOrigin({ x: offsetX, y: offsetY });
    };

    const handleMouseOut = () => {
        setImageScale(1.0);
    };

    return (
        <div className='menuItemContainer'>
            {menuItem && (
                <div className='menuItem'>
                    <div
                        className='zoom'
                        id="menuItemImage"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onMouseMove={handleMouseMove}
                       
                    >
                        <img
                         style={{
                            transform: `scale(${imageScale})`,
                            transformOrigin: `${transformOrigin.x}% ${transformOrigin.y}%`
                        }}
                            className='img'
                            src={menuItem.img}
                            alt='Menu Item'
                        />
                    </div>
                    <div className='item'>
                        <h2>{menuItem.fullname}</h2>
                        <p>{menuItem.price}</p>
                        <p>{menuItem.categoryname}</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuItem;
