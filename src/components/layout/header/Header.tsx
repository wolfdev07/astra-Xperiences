import { Link } from 'react-router-dom';
import DarkHoleLogo from "../../icons/DarkHoleLogo";
import { WhatsAppIcon } from '../../icons/SocialIcons'; // Asegúrate que la ruta sea correcta

function Header() {
  // --- Configuración de WhatsApp ---
  const phoneNumber = "525651833917"; // Tu número sin '+' o espacios
  const message = "Hola, quiero contactarlos para más información."; // Mensaje predefinido
  
  // Codificamos el mensaje para que sea seguro en una URL
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  // ---------------------------------

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 pointer-events-none">
      <nav className="mx-auto flex h-16 max-w-screen-md items-center justify-between rounded-full py-2 px-6 relative pointer-events-auto">
        <div className="absolute left-0 top-0 w-full h-full bg-white/10 border border-white/10 rounded-full backdrop-blur-xl backdrop-saturate-150"></div>

        {/* Logo y Título */}
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
        
        {/* Enlaces de Navegación */}
        <ul className="relative z-10 flex items-center gap-4 sm:gap-6">
          <li><Link to="/" className="text-sm text-gray-300 hover:text-gemini-blue transition-colors duration-200">Inicio</Link></li>
          <li><Link to="/plans" className="text-sm text-gray-300 hover:text-gemini-blue transition-colors duration-200">Planes</Link></li>
          
          {/* Botón de WhatsApp */}
          <li>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="flex items-center gap-2 bg-green-500/90 hover:bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="hidden sm:inline">Whatsapp</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
