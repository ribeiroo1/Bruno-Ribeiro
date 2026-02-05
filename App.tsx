import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Editais from './pages/Editais';
import Simulados from './pages/Simulados';
import Matutao from './pages/Matutao';
import Loja from './pages/Loja';

// Placeholder components for pages not yet fully implemented to avoid errors
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-black text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-500">Esta página está em construção.</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="editais" element={<Editais />} />
          <Route path="simulados" element={<Simulados />} />
          <Route path="matutao" element={<Matutao />} />
          <Route path="depoimentos" element={<Placeholder title="Depoimentos" />} />
          <Route path="agenda" element={<Placeholder title="Agenda" />} />
          <Route path="blog" element={<Placeholder title="Blog" />} />
          <Route path="loja" element={<Loja />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
