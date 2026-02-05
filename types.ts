export enum CourseType {
  ONLINE = 'ONLINE',
  LIVE = 'AO VIVO',
  PRESENCIAL = 'PRESENCIAL'
}

export enum Career {
  PF = 'Polícia Federal',
  PRF = 'Polícia Rodoviária Federal',
  PM = 'Polícia Militar',
  PC = 'Polícia Civil',
  ALL = 'Todas'
}

export interface Course {
  id: string;
  title: string;
  badgeUrl: string; // URL for the shield/logo
  price: number;
  installments?: string;
  career: Career;
  type: CourseType;
  approvalRate?: number;
  duration?: string;
}

export interface Edital {
  id: string;
  title: string;
  organization: string; // Banca
  vacancies: number;
  deadline: string;
  link: string;
  status: 'Aberto' | 'Previsto' | 'Encerrado';
  date: string;
}

export interface Simulado {
  id: string;
  title: string;
  career: Career;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  questions: number;
  isFree: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  approvedIn: string;
  text: string;
  imageUrl: string;
  videoUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}