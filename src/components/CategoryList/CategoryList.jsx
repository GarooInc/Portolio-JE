import React,{ useState } from 'react';
import PropTypes from 'prop-types';

const CategoryList = ({ categories, onCategorySelect }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleCategoryClick = (categoria) => {
      setCategoriaSeleccionada(categoria);
      onCategorySelect(categoria);
  };

  return (
      <div className="category-list flex flex-col md:flex-row md:space-x-8 ">
          {categories.map((category, index) => (
              <div 
                  key={index} 
                  className={`category font-bold m-2 px-8 py-4 text-je-black md:m-0 justify-center items-center flex cursor-pointer ${categoriaSeleccionada === category ? 'border-b-4 border-black' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                  style={{ fontFamily: 'Syne' }}>
                  {category}
              </div>
          ))}
      </div>
  );
}


CategoryList.propTypes = {
    categories: PropTypes.array,
    onCategorySelect: PropTypes.func,
};

export default CategoryList;
