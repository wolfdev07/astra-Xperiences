import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/header/Header';
import HomePage from './pages/home/HomePage';

// Aquí podrías agregar en el futuro un Navbar y un Footer que se muestren en todas las páginas

function App() {
  return (
    <>
      {/* Importamos la fuente globalmente. También puedes mover esto al index.html */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');`}
      </style>

      <section className='relative w-full overflow-hidden'>
        {/* El Header ahora es un componente fijo en la parte superior */}
        <Header />
        
        <main className="pt-10"> {/* Añadimos padding-top para que el contenido no quede debajo del Header fijo */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Futuras rutas */}
          </Routes>
        </main>

        {/* Efecto de fondo (sin cambios, se aplica a todo el contenedor) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(147,39,175,0.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(66,133,244,0.15),rgba(255,255,255,0))]"></div>
        </div>
      </section>
    </>
  );
}

export default App;