import React from 'react';
import { MOCK_EDITALS } from '../constants';
import { Bell, Calendar, FileText, ExternalLink } from 'lucide-react';

const Editais: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-10">
           <div>
             <h1 className="text-3xl font-black text-gray-900">Editais & Concursos</h1>
             <p className="text-gray-600 mt-2">Acompanhe as oportunidades em tempo real.</p>
           </div>
           <button className="hidden sm:flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-lg shadow-red-500/20">
              <Bell size={20} />
              Criar Alerta
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main List */}
          <div className="lg:col-span-2 space-y-6">
             {MOCK_EDITALS.map((edital) => (
               <div key={edital.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-brand-yellow hover:shadow-lg transition">
                  <div className="flex justify-between items-start mb-4">
                     <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wide
                        ${edital.status === 'Aberto' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}
                     `}>
                        {edital.status}
                     </span>
                     <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Calendar size={14} /> {edital.date}
                     </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{edital.title}</h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-6">
                     <div>
                        <span className="block font-bold text-gray-800">Banca</span>
                        {edital.organization}
                     </div>
                     <div>
                        <span className="block font-bold text-gray-800">Vagas</span>
                        {edital.vacancies}
                     </div>
                     <div>
                        <span className="block font-bold text-gray-800">Prazo</span>
                        {edital.deadline}
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <button className="flex-1 bg-gray-900 text-white py-2 rounded font-medium hover:bg-gray-800 transition">
                        Ver Análise
                     </button>
                     <button className="flex items-center justify-center px-4 border border-gray-300 rounded hover:bg-gray-50 text-gray-700">
                        <ExternalLink size={18} />
                     </button>
                  </div>
               </div>
             ))}
          </div>

          {/* Sidebar / Calendar */}
          <div className="space-y-6">
             <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                   <Calendar className="text-brand-yellow" /> Próximas Datas
                </h3>
                <div className="space-y-4">
                   <div className="flex gap-3 items-start border-b border-gray-100 pb-3">
                      <div className="bg-gray-100 rounded p-2 text-center min-w-[50px]">
                         <span className="block text-xs font-bold text-gray-500">FEV</span>
                         <span className="block text-xl font-black text-gray-900">15</span>
                      </div>
                      <div>
                         <p className="font-bold text-sm">PF Administrativo</p>
                         <p className="text-xs text-gray-500">Publicação prevista do edital</p>
                      </div>
                   </div>
                   <div className="flex gap-3 items-start border-b border-gray-100 pb-3">
                      <div className="bg-gray-100 rounded p-2 text-center min-w-[50px]">
                         <span className="block text-xs font-bold text-gray-500">MAR</span>
                         <span className="block text-xl font-black text-gray-900">02</span>
                      </div>
                      <div>
                         <p className="font-bold text-sm">PM-BA</p>
                         <p className="text-xs text-gray-500">Início das inscrições</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-brand-yellow/10 border border-brand-yellow/20 rounded-xl p-6">
                <h3 className="font-bold text-brand-dark mb-2">Material Gratuito</h3>
                <p className="text-sm text-gray-600 mb-4">Baixe o guia completo de como ler editais da banca Cebraspe.</p>
                <button className="w-full bg-brand-yellow text-brand-dark font-bold py-2 rounded hover:bg-yellow-500 transition">
                   Baixar Guia PDF
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Editais;
