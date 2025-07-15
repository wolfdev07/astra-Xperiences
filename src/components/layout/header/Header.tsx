import { Link } from 'react-router-dom';
import DarkHoleLogo from "../../icons/DarkHoleLogo";

function Header() {
  return (
    // Contenedor fijo. Se usa 'pointer-events-none' para poder hacer clic "a través" del espacio vacío del header.
    <header className="fixed top-4 left-0 w-full z-50 px-4 pointer-events-none">
      {/* La barra de navegación. 
        - 'pointer-events-auto' reactiva los clics para la barra misma.
        - 'justify-between' distribuye el espacio entre el logo, los enlaces y el botón.
        - 'max-w-screen-md' le da más espacio para los nuevos botones.
      */}
      <nav className="mx-auto flex h-16 max-w-screen-md items-center justify-between rounded-full py-2 px-6 relative pointer-events-auto">
        {/* Este div es la clave del estilo visual.
          - 'bg-black/50' crea un fondo negro semitransparente.
          - 'backdrop-blur-xl' aplica el efecto de desenfoque al contenido que está detrás.
          - 'border border-white/10' añade un sutil borde para un efecto de "cristal".
        */}
        <div className="absolute left-0 top-0 w-full h-full bg-white/10 border border-white/10 rounded-full backdrop-blur-xl backdrop-saturate-150"></div>

        {/* Logo y Título a la izquierda. Es un Link a la página principal. */}
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 group">
            <DarkHoleLogo className="h-10 w-10 text-gemini-blue group-hover:opacity-80 transition-opacity" />
            
            <div className="hidden sm:flex flex-col text-left">
              <p className="text-sm font-bold tracking-wide text-gray-100 leading-tight">
                AstraXperiences
              </p>

              <span className="text-xs font-light text-gemini-blue leading-tight">
                by Arturo Victoria
              </span>
            </div>
          </Link>
        </div>
        
        {/* Lista de enlaces de navegación en el centro */}
        <ul className="relative z-10 flex items-center gap-4 sm:gap-6">
          <li><Link to="/" className="text-sm text-gray-300 hover:gemini-blue transition-colors duration-200">Inicio</Link></li>
          <li><Link to="/plans" className="text-sm text-gray-300 hover:gemini-blue transition-colors duration-200">Planes</Link></li>
        </ul>

        {/* Botón de prueba a la derecha */}
        <div className="relative z-10">
            <button className="bg-gemini-blue/80 hover:bg-gemini-blue text-white text-sm font-bold py-2 px-4 rounded-full transition-colors duration-300">
              Acción
            </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
