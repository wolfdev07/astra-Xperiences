import { ArrowRightIcon } from "./components/icons/Icons";
import { ProjectCarousel } from "./components/carrousel/ProjectCarousel";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex min-h-[calc(50vh-12rem)] md:min-h-[calc(50vh-16rem)] w-full flex-col items-center justify-center p-2 text-center">
        {/* Sección 2: Carrusel de Proyectos */}
        <div className="relative z-10 w-full pb-5 mt-20">
          <ProjectCarousel />
        </div>

        <div className="relative z-10 w-full max-w-5xl animate-subtle-float">
          {/* Título principal con el degradado */}
          <h1 className="text-3xl font-black tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            <span
              className="bg-gradient-to-r from-gemini-blue to-gemini-purple bg-clip-text"
              style={{ backgroundSize: '200% auto' }}
            >
              La Experiencia <br/>
              Digital de tu Negocio
            </span>
          </h1>
        </div>

        {/* Párrafo descriptivo */}
        <p className="mx-auto mt-8 max-w-2xl text-g text-gray-400 md:text-xl">
          Impactante, Funcional y Escalable.
        </p>

        {/* Botón de llamada a la acción */}
        <div className="mt-5 flex justify-center">
          <Link to="/plans" className="group relative inline-flex items-center gap-x-3 overflow-hidden rounded-lg bg-gradient-to-r from-gemini-blue to-gemini-purple px-6 py-2 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-gemini-blue/50">
            <span className="relative z-10 text-lg">Ver Planes</span>
            <ArrowRightIcon />
          </Link>
        </div>
    </div>
  );
}

export default HomePage;
