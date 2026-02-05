import React from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { ShoppingCart, Star } from 'lucide-react';

const Loja: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-gray-900 mb-8">Loja Oficial</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {MOCK_PRODUCTS.map(product => (
              <div key={product.id} className="group">
                 <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 relative aspect-square">
                    <img 
                       src={product.imageUrl} 
                       alt={product.name} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <button className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full hover:bg-brand-yellow hover:text-black transition shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                       <ShoppingCart size={20} />
                    </button>
                 </div>
                 <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">{product.category}</p>
                 <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{product.name}</h3>
                 <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-brand-yellow text-brand-yellow" />)}
                    <span className="text-xs text-gray-400">(42)</span>
                 </div>
                 <p className="text-xl font-black text-gray-900">R$ {product.price.toFixed(2).replace('.', ',')}</p>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Loja;
