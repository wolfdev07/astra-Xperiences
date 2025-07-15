import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Un ícono simple para representar un enlace roto o una búsqueda fallida.
const GhostIcon = () => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gemini-blue/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </motion.div>
);

function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] w-full flex-col items-center justify-center p-4 text-center">
      <div className="flex flex-col items-center">
        <GhostIcon />
        <h1 className="mt-8 text-8xl font-black tracking-tighter text-transparent sm:text-9xl bg-gradient-to-r from-gemini-blue to-gemini-purple bg-clip-text">
          404
        </h1>
        <p className="mt-4 text-2xl font-bold text-gray-200 sm:text-3xl">
          Página No Encontrada
        </p>
        <p className="mx-auto mt-4 max-w-md text-gray-400">
          Parece que te has perdido en el espacio digital. El enlace que seguiste podría estar roto o la página ha sido movida.
        </p>
        <Link
          to="/"
          className="mt-12 group relative inline-flex items-center gap-x-3 overflow-hidden rounded-lg bg-gradient-to-r from-gemini-blue to-gemini-purple px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-gemini-blue/50"
        >
          Ir a Inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
