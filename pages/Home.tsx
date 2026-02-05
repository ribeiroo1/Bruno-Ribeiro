import React from 'react';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import NewsCard from '../components/NewsCard';
import { MOCK_COURSES, MOCK_POSTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />

      {/* News / Highlights Section - Image 2 Replication */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* First post is featured (wide) */}
             <NewsCard post={MOCK_POSTS[0]} featured={true} />
             {/* Other posts */}
             {MOCK_POSTS.slice(1).map((post) => (
                <NewsCard key={post.id} post={post} />
             ))}
          </div>
        </div>
      </section>

      {/* Courses Section - Image 3 Replication */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-gray-900 mb-4">Nossas Preparações</h2>
             <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_COURSES.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onClick={() => console.log(`Clicked ${course.title}`)} 
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="text-gray-900 font-bold underline underline-offset-4 decoration-brand-yellow decoration-2 hover:text-brand-yellow transition">
              Ver todos os cursos
            </button>
          </div>
        </div>
      </section>

      {/* Quick Newsletter Signup */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-4">Não perca nenhum edital</h2>
           <p className="text-gray-400 mb-8">Receba atualizações em tempo real sobre concursos policiais.</p>
           <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
             <input type="email" placeholder="Seu melhor email" className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow" />
             <button className="bg-brand-yellow text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
               Inscrever-se
             </button>
           </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
