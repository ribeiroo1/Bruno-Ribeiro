import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Concursos', path: '/editais' },
    { name: 'Matutão', path: '/matutao' },
    { name: 'Depoimentos', path: '/depoimentos' },
    { name: 'Agenda', path: '/agenda' },
    { name: 'Blog', path: '/blog' },
    { name: 'Simulados', path: '/simulados' },
    { name: 'Loja', path: '/loja' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black/95 text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-2">
             <Link to="/" className="text-2xl font-black tracking-tighter text-white">
                ELITE<span className="text-brand-yellow">POLICIAL</span>
             </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="O que você procura?" 
                className="w-full bg-gray-800 text-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-brand-yellow text-sm"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Desktop Menu - Actions */}
          <div className="hidden md:flex items-center space-x-6">
             <div className="flex items-center space-x-2 cursor-pointer hover:text-brand-yellow transition">
                <User size={18} />
                <span className="text-sm font-medium">Atendimento</span>
             </div>
             <button className="bg-brand-yellow hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition shadow-lg shadow-brand-yellow/20">
                Premium
             </button>
             <Link to="/loja" className="relative p-2 hover:text-brand-yellow transition">
               <ShoppingCart size={20} />
               <span className="absolute top-0 right-0 h-2 w-2 bg-brand-yellow rounded-full"></span>
             </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links (Secondary Row) */}
        <div className="hidden md:flex justify-center space-x-8 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(link.path) 
                  ? 'text-brand-yellow border-b-2 border-brand-yellow pb-1' 
                  : 'text-gray-300 hover:text-brand-yellow'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <input 
                type="text" 
                placeholder="Buscar..." 
                className="w-full bg-gray-800 text-gray-200 rounded-lg py-2 px-4 mb-4 focus:outline-none"
              />
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-gray-800 text-brand-yellow'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <div className="mt-4 pt-4 border-t border-gray-800">
                <button className="w-full bg-brand-yellow text-black font-bold py-3 rounded-lg">
                    Área do Aluno (Premium)
                </button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
