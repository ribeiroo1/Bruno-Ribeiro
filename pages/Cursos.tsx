import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { MOCK_COURSES, BADGE_PC } from '../constants';
import { Course, CourseType, Career } from '../types';
import { Filter, Search } from 'lucide-react';

const Cursos: React.FC = () => {
  const [filterCareer, setFilterCareer] = useState<string>('Todas');

  // Extended mock data for demo
  const allCourses = [...MOCK_COURSES, 
    {
      id: '5',
      title: 'Polícia Civil - Delegado',
      badgeUrl: BADGE_PC,
      price: 199.90,
      career: Career.PC,
      type: CourseType.LIVE,
      approvalRate: 85
    }
  ];

  const filtered = filterCareer === 'Todas' 
    ? allCourses 
    : allCourses.filter(c => c.career.includes(filterCareer));

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Nossos Cursos</h1>
            <p className="text-gray-600 mt-2">Escolha sua carreira e comece a estudar hoje.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
             {/* Filter Dropdown */}
             <div className="relative">
                <select 
                  className="appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-brand-yellow w-full sm:w-48 font-medium cursor-pointer"
                  onChange={(e) => setFilterCareer(e.target.value)}
                >
                  <option value="Todas">Todas Carreiras</option>
                  <option value="Federal">Federal (PF/PRF)</option>
                  <option value="Militar">Militar</option>
                  <option value="Civil">Civil</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <Filter size={16} />
                </div>
             </div>
          </div>
        </div>

        {/* Course Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map(course => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onClick={() => alert(`Abrir modal de preview para: ${course.title}`)} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">Nenhum curso encontrado para este filtro.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cursos;
