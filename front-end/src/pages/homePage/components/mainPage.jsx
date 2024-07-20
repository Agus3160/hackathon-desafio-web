import React, { useEffect, useState } from "react";
import { SmilePlus } from 'lucide-react';
import CategoryBox from '../../../components/CategoryBox';

const LandingPage = () => {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function getCategorias() {
      const response = await fetch('http://localhost:3000/api/category/list');
      const data = await response.json();
      setCategorias(data.categories);
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
          <b>¡Bienvenidos a Encarnación, la Perla del Sur del Paraguay!</b><br /><br />

          Encarnación, una ciudad vibrante situada a orillas del majestuoso río Paraná, es un destino turístico imperdible en el sur de Paraguay. Conocida como la Perla del Sur, Encarnación combina historia, cultura, naturaleza y entretenimiento, ofreciendo una experiencia única a cada visitante. <br /><br />

          <b>Historia y Cultura</b>
          Encarnación es una ciudad con una rica historia que se remonta a su fundación en 1615 por el jesuita San Roque González de Santa Cruz. La influencia jesuítica es palpable en los alrededores, especialmente en las reducciones de Jesús de Tavarangüé y Santísima Trinidad del Paraná, sitios declarados Patrimonio de la Humanidad por la UNESCO. Estos monumentos históricos ofrecen un fascinante vistazo al pasado, con ruinas que cuentan historias de evangelización y convivencia pacífica entre los jesuitas y los pueblos indígenas guaraníes.
          <br /><br />
          <b>Naturaleza y Paisajes</b>
          La ciudad se enorgullece de sus paisajes naturales, desde las playas de arena blanca de la Costanera de Encarnación hasta los frondosos bosques que rodean la región. La Costanera, con su extensa franja de playas, es perfecta para relajarse, practicar deportes acuáticos o simplemente disfrutar de un atardecer espectacular sobre el río Paraná. Además, los parques y plazas de la ciudad, como el Parque de la Ciudad y la Plaza de Armas, ofrecen espacios verdes ideales para paseos tranquilos y actividades al aire libre.
          <br /><br />
          <b>Eventos y Entretenimiento</b>
          Encarnación es famosa por su vibrante vida nocturna y su calendario de eventos. El Carnaval de Encarnación, considerado uno de los mejores de la región, es un espectáculo de colores, música y danza que atrae a miles de turistas cada año. Durante esta fiesta, las calles se llenan de desfiles, carrozas y comparsas que celebran con alegría y entusiasmo. Además, la ciudad cuenta con una variada oferta gastronómica, desde restaurantes que sirven deliciosa comida paraguaya tradicional hasta opciones internacionales.
          <br /><br />
          <b>Actividades al Aire Libre</b>
          Para los amantes de la aventura y el deporte, Encarnación ofrece numerosas actividades al aire libre. El río Paraná es ideal para practicar kayak, pesca y paseos en bote. Los ciclistas y corredores pueden disfrutar de los numerosos senderos y rutas a lo largo de la Costanera, mientras que los observadores de aves encontrarán un paraíso en los alrededores de la ciudad, donde una gran variedad de especies puede ser avistada.
          <br /><br />
          <b>Hospitalidad y Alojamiento</b>
          Encarnación se destaca por la calidez y hospitalidad de su gente. La ciudad ofrece una amplia gama de opciones de alojamiento que van desde hoteles de lujo hasta acogedoras posadas y albergues. Sea cual sea su preferencia, encontrará un lugar confortable y acogedor para descansar después de un día lleno de exploraciones y aventuras.
                    
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
