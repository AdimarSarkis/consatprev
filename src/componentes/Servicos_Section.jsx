// import { FaRegLightbulb, FaRegHandshake, FaRegChartBar, FaMarker, FaConnectdevelop } from 'react-icons/fa';
// import '../styles/styles.css';
// const services = [
//   {
//     title: 'Consultoria Jurídica',
//     icon: <FaRegLightbulb className="h-8 w-8 text-gray-500" />,
//     description: 'Oferecemos consultoria jurídica especializada para diversas áreas do direito.',
//   },
//   {
//     title: 'Mediação de Conflitos',
//     icon: <FaRegHandshake className="h-8 w-8 text-gray-500" />,
//     description: 'Ajudamos a resolver conflitos de forma amigável e eficiente.',
//   },
//   {
//     title: 'Análise de Mercado',
//     icon: <FaRegChartBar className="h-8 w-8 text-gray-500" />,
//     description: 'Realizamos análises de mercado para auxiliar na tomada de decisões estratégicas.',
//   },
//   {
//     title: 'Segurança do trabalho',
//     icon: <FaMarker className="h-8 w-8 text-gray-500" />,
//     description: 'Realizamos análises de mercado para auxiliar na tomada de decisões estratégicas.',
//   },
//   {
//     title: 'Terceirização de Serviços',
//     icon: <FaConnectdevelop className="h-8 w-8 text-gray-500" />,
//     description: 'Oferecemos serviços de terceirização para diversas áreas da sua empresa.',
//   },
// ];

// function Servicos_Section() {
//   return (
//     <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
//       <h2 className="pb-8 text-4xl text-black font-bold sm:text-5xl lg:text-6xl">Serviços</h2>
//       <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map((service, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center appear">
//             <div className="mb-4">{service.icon}</div>
//             <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
//             <p className="text-gray-600 mb-4">{service.description}</p>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 hover:cursor-pointer hover:scale-105">
//               Saiba mais
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Servicos_Section;
// 'use client'
// import { FaRegLightbulb, FaRegHandshake, FaRegChartBar, FaMarker, FaConnectdevelop } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import '../styles/styles.css';

// const services = [
//   {
//     title: 'Consultoria Jurídica',
//     icon: <FaRegLightbulb className="h-8 w-8 text-gray-500" />,
//     description: 'Oferecemos consultoria jurídica especializada para diversas áreas do direito.',
//   },
//   {
//     title: 'Mediação de Conflitos',
//     icon: <FaRegHandshake className="h-8 w-8 text-gray-500" />,
//     description: 'Ajudamos a resolver conflitos de forma amigável e eficiente.',
//   },
//   {
//     title: 'Análise de Mercado',
//     icon: <FaRegChartBar className="h-8 w-8 text-gray-500" />,
//     description: 'Realizamos análises de mercado para auxiliar na tomada de decisões estratégicas.',
//   },
//   {
//     title: 'Segurança do trabalho',
//     icon: <FaMarker className="h-8 w-8 text-gray-500" />,
//     description: 'Realizamos análises de mercado para auxiliar na tomada de decisões estratégicas.',
//   },
//   {
//     title: 'Terceirização de Serviços',
//     icon: <FaConnectdevelop className="h-8 w-8 text-gray-500" />,
//     description: 'Oferecemos serviços de terceirização para diversas áreas da sua empresa.',
//   },
// ];

// const Servicos_Section = () => {
//   return (
//     <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
//       <h2 className="pb-8 text-4xl text-black font-bold sm:text-5xl lg:text-6xl">Serviços</h2>
//       <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-lg text-center appear"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <div className="mb-4">{service.icon}</div>
//             <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
//             <p className="text-gray-600 mb-4">{service.description}</p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 hover:cursor-pointer"
//             >
//               Saiba mais
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Servicos_Section;
'use client'
import { FaRegLightbulb, FaRegHandshake, FaRegChartBar, FaMarker, FaConnectdevelop } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/styles.css';

const services = [
  {
    title: 'Consultoria Jurídica',
    icon: <FaRegLightbulb className="h-8 w-8 text-gray-500" />,
    description: 'Oferecemos consultoria jurídica especializada para diversas áreas do direito.',
  },
  {
    title: 'Mediação de Conflitos',
    icon: <FaRegHandshake className="h-8 w-8 text-gray-500" />,
    description: 'Ajudamos a resolver conflitos de forma amigável e eficiente.',
  },
  {
    title: 'Análise de Mercado',
    icon: <FaRegChartBar className="h-8 w-8 text-gray-500" />,
    description: 'Realizamos análises de mercado para auxiliar na tomada de decisões estratégicas.',
  },
  {
    title: 'Segurança do trabalho',
    icon: <FaMarker className="h-8 w-8 text-gray-500" />,
    description: 'Realizamos análises de mercado para auxiliar na tomada de decisões estratégicas.',
  },
  {
    title: 'Terceirização de Serviços',
    icon: <FaConnectdevelop className="h-8 w-8 text-gray-500" />,
    description: 'Oferecemos serviços de terceirização para diversas áreas da sua empresa.',
  },
];

const Servicos_Section = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <h2 className="pb-8 text-4xl text-black font-bold sm:text-5xl lg:text-6xl">Serviços</h2>
      <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-lg text-center appear"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 hover:cursor-pointer"
      >
        Saiba mais
      </motion.button>
    </motion.div>
  );
};

export default Servicos_Section;