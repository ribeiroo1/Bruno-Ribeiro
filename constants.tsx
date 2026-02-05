import { Course, Career, CourseType, Edital, BlogPost, Simulado, Product, Testimonial } from './types';
import React from 'react';

// Images based on the request style
export const HERO_BG = "https://images.unsplash.com/photo-1595759711674-6725841cb6db?q=80&w=2070&auto=format&fit=crop"; 
export const BADGE_PC = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bras%C3%A3o_Pol%C3%ADcia_Civil_do_Estado_de_Mato_Grosso_do_Sul.svg/1200px-Bras%C3%A3o_Pol%C3%ADcia_Civil_do_Estado_de_Mato_Grosso_do_Sul.svg.png";
export const BADGE_PM = "https://upload.wikimedia.org/wikipedia/commons/2/22/Brasao_pmpr.png";
export const BADGE_PF = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pol%C3%ADcia_Federal_%28Brasil%29_-_Bras%C3%A3o.svg/1200px-Pol%C3%ADcia_Federal_%28Brasil%29_-_Bras%C3%A3o.svg.png";
export const BADGE_PRF = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bras%C3%A3o_da_Pol%C3%ADcia_Rodovi%C3%A1ria_Federal.svg/1200px-Bras%C3%A3o_da_Pol%C3%ADcia_Rodovi%C3%A1ria_Federal.svg.png";

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Policia Civil - Agente',
    badgeUrl: BADGE_PC,
    price: 99.90,
    career: Career.PC,
    type: CourseType.ONLINE,
    approvalRate: 92
  },
  {
    id: '2',
    title: 'Policia Militar - Soldado',
    badgeUrl: BADGE_PM,
    price: 99.90,
    career: Career.PM,
    type: CourseType.ONLINE,
    approvalRate: 88
  },
  {
    id: '3',
    title: 'Policia Federal - Agente',
    badgeUrl: BADGE_PF,
    price: 99.90,
    career: Career.PF,
    type: CourseType.ONLINE,
    approvalRate: 95
  },
  {
    id: '4',
    title: 'Policia Rodoviária Federal - Policial',
    badgeUrl: BADGE_PRF,
    price: 99.90,
    career: Career.PRF,
    type: CourseType.ONLINE,
    approvalRate: 94
  }
];

export const MOCK_EDITALS: Edital[] = [
  {
    id: '1',
    title: 'PM BA - Soldado',
    organization: 'FCC',
    vacancies: 2000,
    deadline: '2026-03-15',
    link: '#',
    status: 'Aberto',
    date: '29/01/2026'
  },
  {
    id: '2',
    title: 'Polícia Federal - Administrativo',
    organization: 'Cebraspe',
    vacancies: 500,
    deadline: '2026-04-20',
    link: '#',
    status: 'Previsto',
    date: '15/02/2026'
  }
];

export const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'PM BA lança novo concurso para 2026; edital já está disponível!',
    summary: 'PM BA lança novo concurso para 2026; edital já está disponível! Explenhar compairannto se onitval parofanet os ai...',
    date: '29/01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1551699563-8a3036499878?auto=format&fit=crop&q=80&w=800',
    category: 'Notícias'
  },
  {
    id: '2',
    title: 'PC BA: banca do próximo concurso pode ser definida nos próximos dias',
    summary: 'A escolha da banca é um passo crucial para o andamento do certame.',
    date: '28/01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1599256621730-d31d044e1f72?auto=format&fit=crop&q=80&w=800',
    category: 'Concursos'
  },
  {
    id: '3',
    title: 'Concurso PMSE 2026 entra no radar; confira!',
    summary: 'Governador anuncia preparativos para novo edital ainda este semestre.',
    date: '27/01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1563222384-2579df64c679?auto=format&fit=crop&q=80&w=800',
    category: 'Previsões'
  },
  {
    id: '4',
    title: 'Dicas essenciais para o TAF: Como se preparar',
    summary: 'Não deixe para treinar na última hora. O físico reprova tanto quanto a prova teórica.',
    date: '26/01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800',
    category: 'Dicas'
  }
];

export const MOCK_SIMULADOS: Simulado[] = [
  { id: '1', title: 'Simulado Nacional PF', career: Career.PF, difficulty: 'Difícil', questions: 120, isFree: true },
  { id: '2', title: 'Simulado PM-SP Básico', career: Career.PM, difficulty: 'Médio', questions: 60, isFree: true },
  { id: '3', title: 'Simulado PRF Avançado', career: Career.PRF, difficulty: 'Difícil', questions: 120, isFree: false }
];

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Apostila Completa PF 2026', price: 149.90, category: 'Apostilas', imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Kit Canetas Táticas', price: 29.90, category: 'Acessórios', imageUrl: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Vade Mecum Policial', price: 199.90, category: 'Livros', imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400' }
];
