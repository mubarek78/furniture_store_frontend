import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <ul className="nav nav-tabs">
      {categories.map((category, index) => {
        return (
          <li><a
          data-toggle="tab"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </a></li>
        );
      })}
   </ul>
  );
};

export default Categories;