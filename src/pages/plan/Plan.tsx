// Importa Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

import { CheckIcon } from './components/icons/Icons';

// Definimos los datos de los planes en un array para mantener el código limpio
interface PlanData {
    title: string;
    subtitle: string;
    description: string;
    originalPrice: number;
    discount: number;
    features: string[];
    isPopular: boolean;
}

const plansData = [
  {
    title: 'Light',
    subtitle: 'Pulso Inicial',
    description: 'Perfecto para lanzar tu presencia en línea con una landing page profesional.',
    originalPrice: 2800,
    discount: 0.30,
    features: [
      'Landing Page de alto impacto',
      'Diseño 100% responsivo',
      '1 año de dominio (consultar disponibilidad)',
      '1 correo electrónico profesional',
      'Formulario de contacto',
      'Integración con redes sociales',
      'Configuración SEO básica',
    ],
    isPopular: false,
  },
  {
    title: 'Premium',
    subtitle: 'Estrella Digital',
    description: 'Un sitio web completo para negocios que buscan crecer y generar contenido.',
    originalPrice: 7500,
    discount: 0.20,
    features: [
      'Todo el Plan Light, y además:',
      'Sitio web de hasta 5 secciones',
      'Gestor de Contenidos (Blog)',
      'Hasta 5 correos profesionales',
      'SEO Avanzado y Google Analytics',
      'Capacitación para gestionar tu sitio',
      'Soporte técnico por 3 meses',
    ],
    isPopular: true,
  },
  {
    title: 'Elite',
    subtitle: 'E-commerce Pro',
    description: 'La solución completa para vender tus productos en línea sin límites.',
    originalPrice: 15000,
    discount: 0.15,
    features: [
      'Todo el Plan Premium, y además:',
      'Tienda en línea completa',
      'Pasarela de pago (Stripe/MercadoPago)',
      'Carga inicial de hasta 20 productos',
      'Gestión de pedidos y clientes',
      'Optimización de velocidad de carga',
      'Soporte técnico prioritario por 6 meses',
    ],
    isPopular: false,
  },
];

const PlanCard = ({ plan }: { plan: PlanData }) => {
  const finalPrice = plan.originalPrice * (1 - plan.discount);

  return (
    <div className={`relative flex flex-col h-full rounded-2xl p-8 bg-gray-900/70 border ${plan.isPopular ? 'border-gemini-blue' : 'border-white/10'}`}>
      {plan.isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <span className="inline-block px-4 py-1 text-xs font-bold text-white uppercase bg-gemini-blue rounded-full">Más Popular</span>
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
        <p className="mt-1 text-sm text-gemini-purple">{plan.subtitle}</p>
        <p className="mt-4 text-gray-400 text-sm">{plan.description}</p>
        
        <div className="mt-6">
          <span className="text-4xl font-black text-white">${finalPrice.toLocaleString('es-MX')}</span>
          <span className="ml-2 text-lg text-red-500 line-through">${plan.originalPrice.toLocaleString('es-MX')}</span>
          <span className="block text-sm text-gray-400">MXN (Pago único)</span>
        </div>

        <ul className="mt-6 space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start text-left">
              <CheckIcon className="h-5 w-5 text-gemini-blue flex-shrink-0 mr-3 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full mt-8 py-3 px-6 font-bold text-white rounded-lg bg-gradient-to-r from-gemini-blue to-gemini-purple hover:opacity-90 transition-opacity">
        Contratar
      </button>
      <p className="text-center text-xs text-gray-500 mt-3">Pagos con tarjeta y meses sin intereses disponibles.</p>
    </div>
  );
};

function PlansPage() {
  return (
    <div className="w-full py-12 px-4 text-center mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-white sm:text-5xl">Planes a tu Medida</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          Elige el impulso perfecto para tu negocio. Soluciones transparentes, sin costos ocultos.
        </p>

        <div className="mt-5">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="pb-16" // Padding bottom for pagination
          >
            {plansData.map((plan, index) => (
              <SwiperSlide key={index} className="h-auto">
                <PlanCard plan={plan} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PlansPage;