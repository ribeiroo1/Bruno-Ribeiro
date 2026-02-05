import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, PlayCircle, Award, Clock } from 'lucide-react';
import { HERO_BG } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-black h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        
        {/* Badge / Pill */}
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/30">
            <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2 animate-pulse"></span>
            EDITAL ABERTO: PM & POLÍCIA CIVIL
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-4xl tracking-tight mb-6 drop-shadow-lg">
          SUA APROVAÇÃO <br />
          <span className="text-brand-yellow">COMEÇA AQUI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
          Preparação completa para concursos policiais com quem mais aprova no Brasil. 
          Videoaulas, PDFs, simulados e acompanhamento personalizado.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link 
            to="/cursos" 
            className="flex items-center justify-center bg-brand-yellow text-black font-extrabold text-lg px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:scale-105 transition-all duration-300"
          >
            MATRICULE-SE JÁ <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link 
            to="/cursos" 
            className="flex items-center justify-center border border-gray-600 bg-black/40 backdrop-blur-sm text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            VER CURSOS
          </Link>
        </div>

        {/* Stats Footer in Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8 mt-auto mb-10 text-white">
          <div className="text-center md:text-left">
            <p className="text-3xl font-black text-brand-yellow">+15k</p>
            <p className="text-xs text-gray-400 tracking-wider uppercase">Aprovados</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-3xl font-black text-brand-yellow">500+</p>
            <p className="text-xs text-gray-400 tracking-wider uppercase">Cursos</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-3xl font-black text-brand-yellow">24/7</p>
            <p className="text-xs text-gray-400 tracking-wider uppercase">Suporte</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-3xl font-black text-brand-yellow">98%</p>
            <p className="text-xs text-gray-400 tracking-wider uppercase">Satisfação</p>
          </div>
        </div>
      </div>

      {/* Feature Cards Bottom Overlay (Optional, matching image 1 bottom cards) */}
      <div className="hidden lg:grid absolute bottom-10 right-10 left-auto max-w-5xl grid-cols-3 gap-6 z-20">
          {/* Card 1 */}
          <div className="bg-gray-900/90 backdrop-blur border border-gray-700 p-4 rounded-xl flex items-start space-x-4 hover:border-brand-yellow/50 transition duration-300 group">
             <div className="bg-brand-yellow/10 p-2 rounded-lg group-hover:bg-brand-yellow/20 transition">
                <Book className="text-brand-yellow w-6 h-6" />
             </div>
             <div>
                <h3 className="text-white font-bold text-sm">Material Didático</h3>
                <p className="text-gray-400 text-xs mt-1">PDFs focados no edital e atualizados constantemente.</p>
             </div>
          </div>
           {/* Card 2 */}
          <div className="bg-gray-900/90 backdrop-blur border border-gray-700 p-4 rounded-xl flex items-start space-x-4 hover:border-brand-yellow/50 transition duration-300 group">
             <div className="bg-brand-yellow/10 p-2 rounded-lg group-hover:bg-brand-yellow/20 transition">
                <PlayCircle className="text-brand-yellow w-6 h-6" />
             </div>
             <div>
                <h3 className="text-white font-bold text-sm">Aulas Dinâmicas</h3>
                <p className="text-gray-400 text-xs mt-1">Professores especialistas com vasta experiência policial.</p>
             </div>
          </div>
           {/* Card 3 */}
          <div className="bg-gray-900/90 backdrop-blur border border-gray-700 p-4 rounded-xl flex items-start space-x-4 hover:border-brand-yellow/50 transition duration-300 group">
             <div className="bg-brand-yellow/10 p-2 rounded-lg group-hover:bg-brand-yellow/20 transition">
                <Award className="text-brand-yellow w-6 h-6" />
             </div>
             <div>
                <h3 className="text-white font-bold text-sm">Simulados Reais</h3>
                <p className="text-gray-400 text-xs mt-1">Questões comentadas e simulados com ranking nacional.</p>
             </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
