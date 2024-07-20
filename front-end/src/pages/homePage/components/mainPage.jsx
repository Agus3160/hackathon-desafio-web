import React, { useEffect, useState } from "react";
import { SmilePlus } from 'lucide-react';
import CategoryBox from '../../../components/CategoryBox';





const LandingPage = () => {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function getCategorias() {
      const response = await fetch('http://localhost:3001/api/category/list');
      const data = await response.json();
      setCategorias(data);
    }
    getCategorias();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://www.caminodelosjesuitas.com/wp-content/uploads/2023/06/78-2_Costanera-de-Encarnacion-Itapua.jpg" // Replace with your image URL
            alt="Header Image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Visitá Encarnación
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl">
              La perla del sur, a orillas del río Paraná...
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="#"
                className="px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              >
                Explorar
              </a>
              <a
                href="#"
                className="px-8 py-3 text-base font-medium text-blue-600 bg-white border border-transparent rounded-md hover:bg-gray-50"
              >
                Contactos
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Buttons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-around gap-6">
            {
              categorias?.map((category, index) => (
                <CategoryBox
                  key={index} // Es una buena práctica incluir una clave única para cada elemento en una lista
                  imageSrc={category?.imageUrl || 'default-image-url.jpg'} // Agrega una imagen por defecto en caso de que `imageUrl` sea nulo
                  text={category?.name || 'Nombre no disponible'} // Proporciona un texto por defecto en caso de que `name` sea nulo
                  onClick={() => alert(category?.name || 'Nombre no disponible')} // Asegúrate de que `name` esté definido
                />
              ))
            }
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <SmilePlus className="w-12 h-12 text-blue-600" /> {/* Replace with actual icon */}
                </div>
                <h3 className="text-lg font-medium">Robust Workflow</h3>
                <p className="mt-2 text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <SmilePlus className="w-8 h-8" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <SmilePlus className="w-8 h-8" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <SmilePlus className="w-8 h-8" />
            </a>
          </div>
          <div className="mt-8 text-center text-sm">
            &copy; 2024 Your Company - All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
