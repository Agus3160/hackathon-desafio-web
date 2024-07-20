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
import LandingPage from './components/mainPage';

// Este componente de barra lateral es para móvil y escritorio
function Sidebar({ children }) {
  return (
    <aside
      className={`fixed inset-y-0 w-5/6 sm:w-64 transition-all box-border h-full bg-white border-r shadow-sm z-400`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4 pb-2">
          <img
            src="https://masencarnacion.opentechla.com/themes/mas-encarnacion/assets/radio/img/logo_alt.png"
            className={`overflow-hidden transition-all w-32`}
            alt=""
          />
        </div>
        <ul className="flex-1 px-3">{children}</ul>
        <div className="flex border-t p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Mark+Ruffalo"
            alt=""
            className="h-10 w-10 rounded-md mr-3"
          />
          <div
            className={`flex items-center justify-between overflow-hidden transition-allml-3 w-52`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Carlos Lugo</h4>
              <span className="text-xs text-gray-600">lugo@gmail.com</span>
            </div>
            <MoreVertical className="h-6 w-6" />
          </div>
        </div>
      </div>
    </aside>
  );
}

function HomePageContent() {
  return (
    <div className="p-6">
      <LandingPage />
    </div>
  );
}

export default function MakeSidebar() {
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
      <Sidebar >
        {navBarItems.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </Sidebar>
      <main className="flex-1 ml-64 p-6"> {/* Ajusta el margen izquierdo según el ancho del Sidebar */}
        <HomePageContent />
      </main>
    </div>
  );
}
