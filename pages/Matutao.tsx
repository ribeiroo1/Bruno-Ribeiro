import React from 'react';
import { Play, Clock, Calendar } from 'lucide-react';

const Matutao: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
           <h1 className="text-5xl font-black text-brand-yellow mb-4 tracking-tighter">MATUTÃO</h1>
           <p className="text-xl text-gray-300">Comece o dia vencendo a concorrência. Aulas ao vivo todos os dias às 06h00.</p>
        </div>

        {/* Video Player Placeholder */}
        <div className="max-w-4xl mx-auto bg-gray-900 aspect-video rounded-xl shadow-2xl border border-gray-800 flex items-center justify-center relative group cursor-pointer mb-12">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl"></div>
           <div className="z-10 text-center">
              <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                 <Play className="ml-1 text-black w-8 h-8 fill-current" />
              </div>
              <h3 className="text-2xl font-bold">Direito Penal - Parte Geral</h3>
              <p className="text-gray-400">Ao vivo agora • Prof. Silva</p>
           </div>
        </div>

        {/* Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <Calendar className="text-brand-yellow" /> Cronograma da Semana
              </h3>
              <div className="space-y-4">
                 {[
                    { day: 'Seg', subject: 'Português', topic: 'Crase e Regência' },
                    { day: 'Ter', subject: 'Dir. Constitucional', topic: 'Direitos Fundamentais' },
                    { day: 'Qua', subject: 'Raciocínio Lógico', topic: 'Proposições' },
                    { day: 'Qui', subject: 'Informática', topic: 'Segurança da Informação' },
                    { day: 'Sex', subject: 'Dir. Administrativo', topic: 'Atos Administrativos' },
                 ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-700 transition">
                       <div className="flex items-center gap-4">
                          <span className="font-mono font-bold text-brand-yellow">{item.day}</span>
                          <div>
                             <p className="font-bold text-sm">{item.subject}</p>
                             <p className="text-xs text-gray-400">{item.topic}</p>
                          </div>
                       </div>
                       <span className="text-xs font-bold bg-gray-900 px-2 py-1 rounded border border-gray-700">06:00</span>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-gradient-to-br from-brand-yellow to-yellow-600 p-1 rounded-xl">
              <div className="bg-black h-full rounded-lg p-6 flex flex-col items-center justify-center text-center">
                 <h3 className="text-2xl font-bold mb-4">Perdeu a aula?</h3>
                 <p className="text-gray-400 mb-8">Assinantes Premium têm acesso ilimitado a todas as gravações do Matutão.</p>
                 <button className="bg-brand-yellow text-black font-bold py-3 px-8 rounded-full hover:bg-white transition">
                    Acessar Gravações
                 </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Matutao;
