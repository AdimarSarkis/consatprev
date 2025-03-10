// import Navigation from "@/componentes/Navigation";
// import Footer from "@/componentes/Footer";

// export default function About() {
//   return (
//     <>
//       <Navigation></Navigation>
//       <h1>Sobre</h1>
//       <Footer></Footer>
//     </>
//   );
// }
'use client'

import Navigation from "@/componentes/Navigation";
import Footer from "@/componentes/Footer";

const initialNavigation = [
    { name: 'Inicio', href: '/', current: false },
    { name: 'Sobre Nós', href: '/about', current: true },
    { name: 'Serviços', href: '/servicos', current: false },
    { name: 'Contato', href: '/contato', current: false },
];

export default function About() {
  

  return (
    <>
    
      <h1>Sobre</h1>
      
    </>
  );
}