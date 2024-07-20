import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../styles/index.css';

function HoveredSubMenuItem({ icon, text, active }) {
  return (
    <div
      className={`my-2 rounded-md p-2 ${
        active ? 'bg-gray-300' : 'hover:bg-indigo-50'
      }`}
    >
      <div className="flex items-center">
        <span className="text-primary-500 h-6 w-6">{icon}</span>
        <span className="text-primary-500 ml-3 w-28 text-start">{text}</span>
        <div className="bg-primary-200 h-1" />
      </div>
    </div>
  );
}

export default function SidebarItem({
  icon,
  active = false,
  text,
  subMenu = null,
  path = "", // Agrega una propiedad path para la URL
}) {
  const [expandSubMenu, setExpandSubMenu] = useState(false);
  const navigate = useNavigate(); // Crea una instancia de useNavigate

  // Calcular la altura del submenú asumiendo que cada elemento tiene 40px de alto
  const subMenuHeight = expandSubMenu
    ? `${((subMenu?.length || 0) * 40 + (subMenu ? 15 : 0)).toString()}px`
    : 0;

  const handleClick = () => {
    if (subMenu) {
      setExpandSubMenu((curr) => !curr);
    } else {
      navigate(path); // Navega a la URL especificada
    }
  };

  return (
    <>
      <li>
        <button
          className={`
            group relative my-1 flex w-full cursor-pointer
            items-center rounded-md px-3
            py-2 font-medium transition-colors
            ${
              active && !subMenu
                ? 'text-primary-500 bg-gradient-to-tr from-indigo-200 to-indigo-100'
                : 'text-gray-600 hover:bg-indigo-50'
            }
          `}
          onClick={handleClick}
        >
          <span className="h-6 w-6">{icon}</span>
          <span className="ml-3 w-44 text-start">{text}</span>
          {subMenu && (
            <div
              className={`absolute right-2 h-4 w-4 ${
                expandSubMenu ? 'rotate-90' : 'rotate-0'
              } transition-all`}
            >
              <ChevronRight />
            </div>
          )}
        </button>
      </li>
      <ul className="sub-menu pl-6" style={{ height: subMenuHeight }}>
        {subMenu?.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </ul>
    </>
  );
}
