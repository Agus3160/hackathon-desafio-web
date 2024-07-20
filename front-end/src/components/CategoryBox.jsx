import React from 'react';

const CategoryBox = ({ imageSrc, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 w-1/3 h-24 sm:h-28 lg:h-32"
    >
      {/* Imagen de fondo */}
      <img
        src={imageSrc}
        alt={text}
        className="absolute inset-0 object-cover w-full h-full opacity-80"
      />
      {/* Fondo oscuro para el texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Texto encima */}
      <div className="relative flex items-center justify-center w-full h-full text-white text-sm sm:text-base lg:text-lg font-bold p-2 sm:p-4">
        {text}
      </div>
    </button>
  );
};

export default CategoryBox;
