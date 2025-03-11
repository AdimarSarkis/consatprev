
// const Contato_Section = () => {
//   return (
//     <section className="relative flex items-center justify-center min-h-[50vh] bg-gray-900">
      
//       <div className="relative z-10 p-8 text-center text-white">
//         <h2 className="text-4xl font-bold mb-4">Entre em contato com um de nossos especialistas</h2>
//         <p className="text-lg mb-8">Estamos disponíveis para ajudá-lo pelo WhatsApp</p>
//         <a
//           target="_blank"
//           href="https://wa.me/13981158016"
//           className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
//         >
//           Fale conosco no WhatsApp
//         </a>
        
//       </div>
//     </section>
//   );
// };

// export default Contato_Section;
// 'use client'
// import { motion } from 'framer-motion';

// const Contato_Section = () => {
//   return (
//     <motion.section
//       className="relative flex items-center justify-center min-h-[50vh] bg-gray-900"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="relative z-10 p-8 text-center text-white">
//         <motion.h2
//           className="text-4xl font-bold mb-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Entre em contato com um de nossos especialistas
//         </motion.h2>
//         <motion.p
//           className="text-lg mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Estamos disponíveis para ajudá-lo pelo WhatsApp
//         </motion.p>
//         <motion.a
//           target="_blank"
//           href="https://wa.me/13981158016"
//           className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Fale conosco no WhatsApp
//         </motion.a>
//       </div>
//     </motion.section>
//   );
// };

// export default Contato_Section;
'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contato_Section = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      className="relative flex items-center justify-center min-h-[50vh] bg-gray-900"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="relative z-10 p-8 text-center text-white">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          Entre em contato com um de nossos especialistas
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Estamos disponíveis para ajudá-lo pelo WhatsApp
        </motion.p>
        <motion.a
          target="_blank"
          href="https://wa.me/13981158016"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Fale conosco no WhatsApp
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contato_Section;