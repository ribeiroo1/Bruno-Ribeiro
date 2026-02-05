import React from 'react';
import { MOCK_SIMULADOS } from '../constants';
import { CheckCircle, Clock, Lock } from 'lucide-react';

const Simulados: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-gray-900 mb-8">Simulados & Treino</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_SIMULADOS.map((simulado) => (
             <div key={simulado.id} className="bg-white rounded-xl shadow p-6 border border-gray-100 relative overflow-hidden group">
                {!simulado.isFree && (
                   <div className="absolute top-4 right-4 text-gray-400 bg-gray-100 p-1 rounded-full">
                      <Lock size={16} />
                   </div>
                )}
                
                <span className={`inline-block px-2 py-1 rounded text-xs font-bold uppercase mb-4 ${
                  simulado.difficulty === 'Fácil' ? 'bg-green-100 text-green-700' :
                  simulado.difficulty === 'Médio' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                   {simulado.difficulty}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{simulado.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{simulado.career}</p>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                   <div className="flex items-center gap-1">
                      <CheckCircle size={16} className="text-brand-yellow" />
                      {simulado.questions} Questões
                   </div>
                   <div className="flex items-center gap-1">
                      <Clock size={16} className="text-brand-yellow" />
                      4h Duração
                   </div>
                </div>

                <button 
                  className={`w-full py-3 rounded-lg font-bold transition flex items-center justify-center gap-2 ${
                     simulado.isFree 
                     ? 'bg-brand-dark text-white hover:bg-black' 
                     : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!simulado.isFree}
                >
                   {simulado.isFree ? 'Iniciar Agora' : 'Exclusivo Assinantes'}
                </button>
             </div>
          ))}
        </div>

        {/* Upsell Section */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                 Quer acesso a <span className="text-brand-yellow">mais de 1.000 simulados?</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                 Nossa plataforma premium tem banco de questões atualizado diariamente, comentários de professores em vídeo e ranking nacional.
              </p>
              <button className="bg-brand-yellow text-black font-black text-lg px-8 py-3 rounded-lg hover:bg-yellow-500 transition transform hover:scale-105">
                 VIRAR PREMIUM
              </button>
           </div>
           {/* Decorative bg element */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Simulados;
