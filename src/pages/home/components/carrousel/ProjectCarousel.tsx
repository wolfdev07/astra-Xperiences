// Importa los componentes y módulos de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

import swipper_1 from '../../../../assets/img/swipper_1.png'
import swipper_2 from '../../../../assets/img/swipper_2.png'
import swipper_3 from '../../../../assets/img/swipper_3.png'
import swipper_4 from '../../../../assets/img/swipper_4.png'
import swipper_5 from '../../../../assets/img/swipper_5.png'

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Array de imágenes de ejemplo para el carrusel
const projectImages = [ swipper_1, swipper_2, swipper_3, swipper_4, swipper_5, ];

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
          <SwiperSlide key={index} style={{ width: '80%', maxWidth: '600px' }}>
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
