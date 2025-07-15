import DarkHoleLogo from "../../icons/DarkHoleLogo";
import { LinkedInIcon, GitHubIcon, XIcon } from "../../icons/SocialIcons";

function Footer() {
    
    return (
    <footer className="w-full py-12 px-4">
      <div className="container mx-auto flex flex-col items-center gap-6">
        
        {/* Íconos de Redes Sociales */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/wolfdev07"
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="text-gray-500 hover:text-gemini-blue transition-colors duration-300"
          >
            <GitHubIcon />
          </a>
          <a 
            href="https://www.linkedin.com/in/arthuro-dev/"
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-gemini-blue transition-colors duration-300"
          >
            <LinkedInIcon />
          </a>
          <a 
            href="https://x.com/tu-usuario" // Reemplaza con tu URL
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="X (Twitter)"
            className="text-gray-500 hover:text-gemini-blue transition-colors duration-300"
          >
            <XIcon />
          </a>
        </div>

        {/* Línea divisora sutil */}
        <hr className="w-24 border-t border-gray-700" />

        {/* Nombre del sitio y enlace personal */}
        <div className="text-center">
            <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()}
            </p>

            <p className="flex justify-between items-center text-sm text-gray-400 mb-0">
                <DarkHoleLogo className="h-10 w-10" />
                AstraeXperiences Studio
            </p>
            
            <p className="text-xs text-gray-500 mt-0">
                <a 
                href="https://mellow-sunshine-ceb6db.netlify.app/"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gemini-purple transition-colors duration-300"
                >
                by Arturo Victoria
                </a>
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;