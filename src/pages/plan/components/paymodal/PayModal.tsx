import { useState } from 'react';
import { motion } from 'framer-motion';
import { CopyIcon, CheckCircleIcon } from '../icons/Icons';

// Reutilizamos la interfaz del plan para tipar las props
interface PlanData {
    title: string;
    subtitle: string;
    description: string;
    originalPrice: number;
    discount: number;
    features: string[];
    isPopular: boolean;
}

interface PayModalProps {
  plan: PlanData;
  onClose: () => void;
}

// Componente reutilizable para las filas de datos bancarios
const CopyableRow = ({ label, value }: { label: string, value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // El estado de "copiado" dura 2 segundos
  };

  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-800/50 p-3">
      <div className="text-left">
        <p className="text-xs text-gray-400">{label}</p>
        <p className="font-mono text-sm text-white">{value}</p>
      </div>
      <button onClick={handleCopy} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
        {copied ? (
          <CheckCircleIcon className="h-5 w-5 text-green-400" />
        ) : (
          <CopyIcon className="h-5 w-5 text-gray-400" />
        )}
      </button>
    </div>
  );
};

export const PayModal = ({ plan, onClose }: PayModalProps) => {
  const finalPrice = plan.originalPrice * (1 - plan.discount);
  const [paymentMethod, setPaymentMethod] = useState('transfer');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-lg rounded-2xl bg-gray-900 border border-white/10 p-8 shadow-2xl m-4"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Confirmación de Pedido</h2>
        </div>

        <div className="my-6 h-px bg-white/10"></div>

        <div className="text-left">
          <p className="mt-2 text-xl text-white">Compra:</p>  
          <p className="mt-2 text-gemini-purple">{plan.title} {plan.subtitle}</p>
          <p className="mt-4 text-3xl font-bold text-white">
            Total: ${finalPrice.toLocaleString('es-MX')} MXN
          </p>
        </div>

        {/* Pestañas de métodos de pago */}
        <div className="mt-6 flex border-b border-white/10">
          <button onClick={() => setPaymentMethod('transfer')} className={`py-2 px-4 text-sm font-medium ${paymentMethod === 'transfer' ? 'text-gemini-blue border-b-2 border-gemini-blue' : 'text-gray-400'}`}>
            Transferencia Bancaria
          </button>
          <button onClick={() => setPaymentMethod('paypal')} className={`py-2 px-4 text-sm font-medium ${paymentMethod === 'paypal' ? 'text-gemini-blue border-b-2 border-gemini-blue' : 'text-gray-400'}`}>
            PayPal / Tarjeta
          </button>
        </div>

        {/* Contenido de las pestañas */}
        <div className="mt-6">
          {paymentMethod === 'transfer' && (
            <div className="space-y-3">
              <p className="text-sm text-gray-300 mb-4">Realiza la transferencia a la siguiente cuenta y envía tu comprobante</p>
              <CopyableRow label="Banco" value="BBVA" />
              <CopyableRow label="Cuenta" value="0474114299" />
              <CopyableRow label="Cuenta CLABE" value="012441004741142993" />
              <CopyableRow label="Código SWIFT" value="BCMRMXMMPYM" />
            </div>
          )}
          {paymentMethod === 'paypal' && (
            <div className="text-center p-8 bg-gray-800/50 rounded-lg">
              <p className="text-gray-400">Para pagar a 3, 6 o 12 Meses Sin Intereses solicita un link de pago.</p>
              <p className="text-2xl mt-2">🚀</p>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-8 py-3 px-6 font-bold text-white rounded-lg bg-gemini-blue hover:bg-gemini-blue/80 transition-colors"
        >
          Aceptar
        </button>
      </motion.div>
    </motion.div>
  );
};