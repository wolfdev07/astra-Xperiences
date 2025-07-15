import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import { TransitionLogo } from './components/layout/transition/TransitionLogo';
import { AnimatedPage } from './components/layout/transition/AnimatedPage';

import HomePage from './pages/home/HomePage';
import PlansPage from './pages/plan/Plan';

function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer  = setTimeout(() => {
      setIsLoading(false);
    }, 1500)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');`}
      </style>

      <section className='relative w-full overflow-hidden min-h-screen flex flex-col'>
        <Header />

        <main className="flex-grow">
          {/* AnimatePresence gestiona la animación de entrada/salida de componentes */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              // Muestra la animación del logo mientras isLoading es true
              <TransitionLogo key="loader" />
            ) : (
              // Cuando la carga termina, muestra las rutas animadas
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <AnimatedPage>
                      <HomePage />
                    </AnimatedPage>
                  }
                />
                <Route
                  path="/plans"
                  element={
                    <AnimatedPage>
                      <PlansPage />
                    </AnimatedPage>
                  }
                />
              </Routes>
            )}
          </AnimatePresence>
        </main>

        <Footer />

        {/* Efecto de fondo */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-[-0%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(147,39,175,0.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-0%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(66,133,244,0.15),rgba(255,255,255,0))]"></div>
        </div>
      </section>
    </>
  );
}

export default App;