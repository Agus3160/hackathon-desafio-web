import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import '../styles/index.css';

// Este componente se usa para renderizar los elementos del submenú cuando se pasa el ratón por encima
function HoveredSubMenuItem({ icon, text, active }) {
  return (
    <div
      className={`my-2 rounded-md p-2 z-4000 ${
        active ? 'bg-gray-300' : ' hover:bg-indigo-50'
      }`}
    >
      <div className="flex items-center justify-center ">
        <span className="text-primary-500 h-6 w-6 ">{icon}</span>
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
  expanded = false,
  subMenu = null,
}) {
  const [expandSubMenu, setExpandSubMenu] = useState(false);

  useEffect(() => {
    if (!expanded) {
      setExpandSubMenu(false);
    }
  }, [expanded]);

  // Calcular la altura del submenú asumiendo que cada elemento tiene 40px de alto
  const subMenuHeight = expandSubMenu
    ? `${((subMenu?.length || 0) * 40 + (subMenu ? 15 : 0)).toString()}px`
    : 0;

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
         ${!expanded && 'hidden sm:flex'}
     `}
          onClick={() => subMenu ? setExpandSubMenu((curr) => expanded && !curr) : null}
        >
          <span className="h-6 w-6">{icon}</span>

          <span
            className={`overflow-hidden text-start transition-all ${
              expanded ? 'ml-3 w-44' : 'w-0'
            }`}
          >
            {text}
          </span>
          {subMenu && (
            <div
              className={`absolute right-2 h-4 w-4 ${expandSubMenu ? 'rotate-90' : 'rotate-0'} transition-all`}
            >
              <ChevronRight />
            </div>
          )}

          {/* 
            Mostrar el texto del elemento o los elementos del submenú cuando se pasa el ratón por encima
          */}
          {!expanded && (
            <div
              className={`
            text-primary-500 invisible absolute left-full ml-6 -translate-x-3
            rounded-md bg-indigo-100 px-2
            py-1 text-sm opacity-20 transition-all
            group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
        `}
            >
              {/* 
                Si el elemento sobre el que se pasa el ratón no tiene submenú, mostrar el texto
                De lo contrario, mostrar los elementos del submenú
              */}
              {!subMenu
                ? text
                : subMenu.map((item, index) => (
                    <HoveredSubMenuItem
                      key={index}
                      text={item.text}
                      icon={item.icon}
                    />
                  ))}
            </div>
          )}
        </button>
      </li>
      <ul
        className="sub-menu pl-6"
        style={{ height: subMenuHeight }}
      >
        {/* 
          Renderizar los elementos del submenú si el elemento tiene un submenú
          Los elementos del submenú se renderizan como componentes SidebarItem
        */}
        {expanded &&
          subMenu?.map((item, index) => (
            <SidebarItem key={index} {...item} expanded={expanded} />
          ))}
      </ul>
    </>
  );
}
