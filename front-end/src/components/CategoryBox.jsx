import React from 'react';

const CategoryBox = ({ imageSrc, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      {/* Imagen de fondo */}
      <img
        src={imageSrc}
        alt={text}
        className="absolute inset-0 object-cover w-full h-full opacity-70"
      />
      {/* Fondo oscuro para el texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Texto encima */}
      <div className="relative flex items-center justify-center w-full h-full text-white text-lg font-bold p-4">
        {text}
      </div>
    </button>
  );
};

export default TourButton;
