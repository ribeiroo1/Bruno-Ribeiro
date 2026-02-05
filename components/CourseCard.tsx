import React from 'react';
import { Course } from '../types';
import { ArrowRight } from 'lucide-react';

interface Props {
  course: Course;
  onClick: () => void;
}

const CourseCard: React.FC<Props> = ({ course, onClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-6 border border-gray-100 group">
      {/* Badge Image Area */}
      <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-lg mb-6 relative overflow-hidden">
        {/* Dark overlay effect behind badge */}
        <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
        <img 
          src={course.badgeUrl} 
          alt={course.title} 
          className="h-32 w-auto object-contain z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
        />
      </div>

      {/* Content */}
      <div className="text-center w-full">
        <h3 className="text-lg font-black text-gray-900 leading-tight min-h-[50px] mb-2">
          {course.title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-4 font-medium uppercase tracking-wide">
           {course.type} • {course.career}
        </p>

        <div className="flex items-center justify-center gap-2 mb-6">
           <span className="text-2xl font-black text-gray-900">
             R$ {course.price.toFixed(2).replace('.', ',')}
           </span>
        </div>

        <button 
          onClick={onClick}
          className="w-full bg-brand-yellow text-brand-dark font-extrabold py-3 px-6 rounded-lg uppercase tracking-wider text-sm hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
