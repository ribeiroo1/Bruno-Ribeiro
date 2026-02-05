import React from 'react';
import { BlogPost } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  post: BlogPost;
  featured?: boolean;
}

const NewsCard: React.FC<Props> = ({ post, featured = false }) => {
  if (featured) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-shadow border border-gray-100 col-span-1 md:col-span-3">
        <div className="md:w-1/2 rounded-xl overflow-hidden h-64 md:h-auto">
           <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
           <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs font-bold w-fit mb-4">{post.date}</span>
           <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">{post.title}</h3>
           <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{post.summary}</p>
           <button className="text-brand-yellow font-bold flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wide text-sm">
             Read More <ArrowUpRight size={16} />
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col h-full hover:shadow-lg transition-shadow border border-gray-100">
      <div className="relative h-48 rounded-xl overflow-hidden mb-5">
         <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold w-6 h-6 flex items-center justify-center rounded shadow-sm z-10">
            {post.id}
         </span>
         <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug line-clamp-3">
          {post.title}
        </h3>
        <div className="mt-auto pt-4">
           <button className="text-brand-yellow font-bold flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wide text-xs">
             Read More <ArrowUpRight size={14} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
