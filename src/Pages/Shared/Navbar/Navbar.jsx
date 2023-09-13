import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/natural-categories')
        .then(res => res.json())
        .then(data => {
          setCategories(data);

        });
    },);

  }, [])
  return (
    <nav>
      <ul className="navbar">
        {categories.map(item => (
          <li key={item.id}>
            {item.subcategories ? (
              <div className="dropdown">
                <span>{item.name}</span>
                <ul className="dropdown-content">
                  {item.subcategories.map(subcategory => (
                    <li key={subcategory.id}>
                      <Link to={`/category/${subcategory.id}`}>{subcategory.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link to={`/category/${item.id}`}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

  
  
  
  