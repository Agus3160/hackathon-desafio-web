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
function Sidebar({ children, expanded, setExpanded }) {
  return (
    <aside
      className={`fixed inset-y-0 ${expanded ? 'w-64' : 'w-20'} transition-all box-border h-full bg-white border-r shadow-sm`}
    >
      <div className="flex h-full flex-col">
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

  // Define el ancho del Sidebar basado en si está expandido
  const sidebarWidth = expanded ? 'w-64' : 'w-20';

  return (
    <div className="flex">
      <Sidebar expanded={expanded} setExpanded={setExpanded}>
        {navBarItems.map((item, index) => (
          <SidebarItem key={index} expanded={expanded} {...item} />
        ))}
      </Sidebar>
      <main className={`flex-1 ml-${expanded ? '64' : '20'} p-6`}> {/* Ajusta el margen izquierdo según el estado del Sidebar */}
        <HomePageContent />
      </main>
    </div>
  );
}
