'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegLightbulb, FaRegHandshake, FaRegChartBar, FaMarker, FaConnectdevelop } from 'react-icons/fa';

const services = [
  {
    title: 'Consultoria Jurídica',
    icon: <FaRegLightbulb className="h-8 w-8 text-gray-500" />,
    description: 'Oferecemos consultoria jurídica especializada para diversas áreas do direito.',
    details: "detalhes testes hahahahaahahah"
  },
  {
    title: 'Mediação de Conflitos',
    icon: <FaRegHandshake className="h-8 w-8 text-gray-500" />,
    description: 'Ajudamos a resolver conflitos de forma amigável e eficiente.',
    details: "detalhes testes hahahahaahahah"
  },
  {
    title: 'Análise de Mercado',
    icon: <FaRegChartBar className="h-8 w-8 text-gray-500" />,
    description: 'Realizamos análises de mercado para auxiliar na tomada de decisões estratégicas.',
    details: "detalhes testes hahahahaahahah"
  },
  {
    title: 'Segurança do trabalho',
    icon: <FaMarker className="h-8 w-8 text-gray-500" />,
    description: 'Realizamos análises de mercado para auxiliar na tomada de decisões estratégicas.',
    details: "detalhes testes hahahahaahahah"
  },
  {
    title: 'Terceirização de Serviços',
    icon: <FaConnectdevelop className="h-8 w-8 text-gray-500" />,
    description: 'Oferecemos serviços de terceirização para diversas áreas da sua empresa.',
    details: "detalhes testes hahahahaahahah"
  },
];

const Card_Servicos = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const closeExpandedCard = (e) => {
    e.stopPropagation();
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-black">Nossos Serviços</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[1fr]">
          {services.map((service, index) => (
            <AnimatePresence key={index}>
              <motion.div
                className={`bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer transition-transform transform ${selectedService === service ? 'col-span-3 row-span-3 order-first flex flex-col justify-center items-center' : 'hover:scale-105'}`}
                whileHover={{ scale: selectedService === service ? 1 : 1.05 }}
                onClick={() => handleCardClick(service)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "tween", ease: "linear", duration: 0.5 }} // Animação linear
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {selectedService === service && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: "tween", ease: "linear", duration: 0.3 }} // Animação linear para os detalhes
                    className="mt-4 text-center"
                  >
                    <p className="text-gray-600 mb-8">{service.details}</p>
                    <button
                      onClick={closeExpandedCard}
                      className="hover:cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                      Fechar
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card_Servicos;