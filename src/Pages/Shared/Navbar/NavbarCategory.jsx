import React from 'react';

const NavbarCategory = ({ category }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <ul>
        {category.items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarCategory;
