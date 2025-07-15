import { motion } from 'framer-motion';
import DarkHoleLogo from '../../icons/DarkHoleLogo'; // Asegúrate que la ruta sea correcta

export const TransitionLogo = () => {
  return (
    // Contenedor que cubre toda la pantalla
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-bg"
      // Animación de salida: se escala y se desvanece
      exit={{ scale: 1.5, opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Tu logo, que también puede tener su propia animación si lo deseas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <DarkHoleLogo className="h-24 w-24 text-gemini-blue" />
      </motion.div>
    </motion.div>
  );
};