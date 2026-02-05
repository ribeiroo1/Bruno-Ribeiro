import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
               <h3 className="text-white font-black text-xl mb-4">ELITEPOLICIAL</h3>
               <p className="text-sm">A maior plataforma de preparação para carreiras policiais do Brasil.</p>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4">Institucional</h4>
               <ul className="space-y-2 text-sm">
                  <li>Sobre Nós</li>
                  <li>Termos de Uso</li>
                  <li>Política de Privacidade</li>
                  <li>Trabalhe Conosco</li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4">Ajuda</h4>
               <ul className="space-y-2 text-sm">
                  <li>Central de Ajuda</li>
                  <li>Fale Conosco</li>
                  <li>Como comprar</li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
               <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-gray-800 rounded hover:bg-brand-yellow transition cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gray-800 rounded hover:bg-brand-yellow transition cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gray-800 rounded hover:bg-brand-yellow transition cursor-pointer"></div>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default Layout;
