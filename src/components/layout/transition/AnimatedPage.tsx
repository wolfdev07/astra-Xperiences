import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20, // Empieza ligeramente abajo
  },
  in: {
    opacity: 1,
    y: 0, // Sube a su posición final
  },
  out: {
    opacity: 0,
    y: -20, // Se va hacia arriba
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.5,
};

export const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};
