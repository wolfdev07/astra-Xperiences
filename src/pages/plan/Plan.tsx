import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { AnimatePresence } from 'framer-motion';

import { CheckIcon } from './components/icons/Icons';
import { PayModal } from './components/paymodal/PayModal';

import 'swiper/css';
import 'swiper/css/pagination';

// Interfaz para los datos del plan
interface PlanData {
    title: string;
    subtitle: string;
    description: string;
    originalPrice: number;
    discount: number;
    features: string[];
    isPopular: boolean;
}

const plansData: PlanData[] = [
  // ... (tus datos de planes aquí, sin cambios)
  {
    title: 'Light',
    subtitle: 'Pulso Inicial',
    description: 'Ideal para emprendedores que necesitan presencia inmediata con impacto visual.',
    originalPrice: 2800,
    discount: 0.30,
    features: [
      'Landing Page de alto impacto',
      'Diseño adaptable (responsive) para móvil y escritorio',
      '1 año de dominio incluido (consulta disponibilidad)',
      '1 correo corporativo',
      'Formulario de contacto funcional',
      'Integración con redes sociales',
      'Optimización SEO básica',
    ],
    isPopular: false,
  },
  {
    title: 'Premium',
    subtitle: 'Crece con Presencia en Internet',
    description: 'Para negocios que ya están en marcha y necesitan escalar su presencia y contenido.',
    originalPrice: 7500,
    discount: 0.20,
    features: [
      'Todo el plan Light, más:',
      'Sitio web con hasta 5 secciones personalizadas',
      'Gestor de contenidos para publicar blogs, novedades o casos de éxito',
      'Hasta 5 correos corporativos',
      'SEO avanzado + integración con Google Analytics',
      'Capacitación para autogestionar tu sitio',
      'Soporte técnico durante 3 meses',
    ],
    isPopular: true,
  },
  {
    title: 'Elite',
    subtitle: 'E-commerce Pro',
    description: 'Para marcas que quieren vender en línea de forma moderna, rápida y segura.',
    originalPrice: 15000,
    discount: 0.15,
    features: [
      'Todo el plan Premium, más:',
      'Tienda en línea completa (carrito, catálogo y checkout)',
      'Pasarela de pagos integrada (Stripe o MercadoPago)',
      'Carga inicial de hasta 20 productos',
      'Panel de gestión para pedidos y clientes',
      'Optimización avanzada de velocidad y rendimiento',
      'Soporte prioritario por 6 meses',
    ],
    isPopular: false,
  },
];

// El componente PlanCard ahora necesita una función para abrir el modal
const PlanCard = ({ plan, onContract }: { plan: PlanData; onContract: (plan: PlanData) => void; }) => {
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
      {/* El botón ahora llama a la función onContract */}
      <button onClick={() => onContract(plan)} className="w-full mt-8 py-3 px-6 font-bold text-white rounded-lg bg-gradient-to-r from-gemini-blue to-gemini-purple hover:opacity-90 transition-opacity">
        Contratar
      </button>
      <p className="text-center text-xs text-gray-500 mt-3">Pagos con tarjeta y meses sin intereses disponibles.</p>
    </div>
  );
};

function PlansPage() {
  // Estado para manejar el plan seleccionado y la visibilidad del modal
  const [selectedPlan, setSelectedPlan] = useState<PlanData | null>(null);

  const handleOpenModal = (plan: PlanData) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  return (
    <>
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
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
              }}
              className="pb-16"
            >
              {plansData.map((plan, index) => (
                <SwiperSlide key={index} className="h-auto">
                  {/* Pasamos la función onContract a cada tarjeta */}
                  <PlanCard plan={plan} onContract={handleOpenModal} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Renderizado condicional del modal con animación */}
      <AnimatePresence>
        {selectedPlan && (
          <PayModal plan={selectedPlan} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
}

export default PlansPage;