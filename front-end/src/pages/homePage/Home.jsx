import {
  Home,
  Coffee,
  Hotel,
  Utensils,
  TreePine,
  ArrowRight, 
  ArrowLeft,
  MoreVertical,
  SmilePlus
} from 'lucide-react';
import { useState } from 'react';
import SidebarItem from './components/SidebarItem';

// Este componente de barra lateral es para móvil y escritorio
function Sidebar({ children, expanded, setExpanded }) {
  return (
    <div className="relative">
      {/* 
        Este div se usa para crear la superposición de fondo cuando la barra lateral está expandida
        Solo es visible en pantallas móviles
      */}
      <div
        className={`fixed inset-0 -z-10 block bg-gray-400 ${expanded ? 'block sm:hidden' : 'hidden'}`}
      />
      <aside
        className={`box-border h-screen transition-all ${expanded ? 'w-5/6 sm:w-64' : 'w-0 sm:w-20'}`}
      >
        <nav className="flex h-full flex-col border-r bg-white shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            <img
              src="https://masencarnacion.opentechla.com/themes/mas-encarnacion/assets/radio/img/logo_alt.png"
              className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
              alt=""
            />
            <div className={`${expanded ? '' : 'hidden sm:block'}`}>
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
              >
                {expanded ? (
                  <ArrowRight className="h-6 w-6" />
                ) : (
                  <ArrowLeft className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
          <div className="flex border-t p-3">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Mark+Ruffalo"
              alt=""
              className="h-10 w-10 rounded-md"
            />
            <div
              className={`flex items-center justify-between overflow-hidden transition-all ${expanded ? 'ml-3 w-52' : 'w-0'}`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Carlos Lugo</h4>
                <span className="text-xs text-gray-600">lugo@gmail.com</span>
              </div>
              <MoreVertical className="h-6 w-6" />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}

function HomePageContent() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a la Página Principal</h1>
      <p className="text-gray-700">Aquí puedes agregar el contenido principal de tu página.</p>
      {/* Agrega más contenido y componentes según tus necesidades */}
    </div>
  );
}

export default function MakeSidebar() {
  const [expanded, setExpanded] = useState(true);
  const navBarItems = [
    {
      icon: <Home />,
      text: 'Home',
      active: true,
    },    
    {
      icon: <SmilePlus />,
      subMenu: [
        {
          icon: <Coffee />,
          text: 'Cafeterías',
        },
        {
          icon: <Hotel />,
          text: 'Hoteles',
        },
        {
          icon: <Utensils />,
          text: 'Restaurantes',
        },
        {
          icon: <TreePine />,
          text: 'Plazas',
        },
      ],
      text: 'Todo',
    },
  ];

  return (
    <div className="flex">
      <Sidebar expanded={expanded} setExpanded={setExpanded}>
        {navBarItems.map((item, index) => (
          <SidebarItem key={index} expanded={expanded} {...item} />
        ))}
      </Sidebar>
      <main className="flex-1">
        <HomePageContent />
      </main>
    </div>
  );
}
