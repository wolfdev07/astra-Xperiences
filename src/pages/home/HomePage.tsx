import { ArrowRightIcon } from "./components/icons/Icons";
import { ProjectCarousel } from "./components/carrousel/ProjectCarousel";

function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-16rem)] w-full flex-col items-center justify-center p-4 text-center">
        {/* Sección 2: Carrusel de Proyectos */}
        <div className="relative z-10 w-full pb-16">
          <ProjectCarousel />
        </div>

        <div className="relative z-10 w-full max-w-5xl animate-subtle-float">
          {/* Título principal con el degradado */}
          <h1 className="text-4xl font-black tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            <span
              className="bg-gradient-to-r from-gemini-blue to-gemini-purple bg-clip-text"
              style={{ backgroundSize: '200% auto' }}
            >
              La Experiencia Digital de tu Negocio
            </span>
          </h1>
        </div>

        {/* Párrafo descriptivo */}
        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400 md:text-xl">
          Sitios web y apps visualmente impactantes, funcionales y listos para escalar tu negocio.
        </p>

        {/* Botón de llamada a la acción */}
        <div className="mt-12 flex justify-center">
          <button className="group relative inline-flex items-center gap-x-3 overflow-hidden rounded-lg bg-gradient-to-r from-gemini-blue to-gemini-purple px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-gemini-blue/50">
            <span className="relative z-10 text-lg">Ver Planes</span>
            <ArrowRightIcon />
          </button>
        </div>
    </div>
  );
}

export default HomePage;
