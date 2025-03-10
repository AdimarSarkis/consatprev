import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Consat'prev",
  description: "Consultoria Judiciaria",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="pt">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import Navigation from '@/componentes/Navigation';
import Footer from '@/componentes/Footer';

const Layout = ({ children }) => {
  return (
    
      <html lang="pt">
       <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      </div>
      <Footer/>
      </body>
    </html>
    
  );
};

export default Layout;