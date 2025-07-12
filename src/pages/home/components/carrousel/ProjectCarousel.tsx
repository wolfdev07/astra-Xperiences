// Importa los componentes y módulos de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Array de imágenes de ejemplo para el carrusel
const projectImages = [
  'https://placehold.co/1280x720/4285F4/FFFFFF?text=Proyecto+1',
  'https://placehold.co/1280x720/9B27AF/FFFFFF?text=Proyecto+2',
  'https://placehold.co/1280x720/34A853/FFFFFF?text=Proyecto+3',
  'https://placehold.co/1280x720/EA4335/FFFFFF?text=Proyecto+4',
  'https://placehold.co/1280x720/FBBC05/FFFFFF?text=Proyecto+5',
];

export const ProjectCarousel = () => {
  return (
    // El contenedor ahora es relativo y tiene un ancho máximo
    <div className="w-full max-w-6xl mx-auto py-8">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          // Estilos para la paginación para que sea visible en el fondo oscuro
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: #fff;"></span>`;
          }
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="w-full h-auto"
      >
        {projectImages.map((src, index) => (
          <SwiperSlide key={index} style={{ width: '50%', maxWidth: '600px' }}>
            <img 
              src={src} 
              alt={`Vista previa del proyecto ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </SwiperSlide>
        ))}
        {/* Contenedor para la paginación */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};
