
import React from 'react';
import { 
  Droplets, 
  Paintbrush, 
  Home, 
  Thermometer, 
  ShieldCheck, 
  Wrench, 
  Split, 
  Pipette,
  Zap,
  Clock,
  LayoutGrid,
  ShieldAlert
} from 'lucide-react';
import { Service, PortfolioItem, Testimonial } from './types';

export interface EnhancedService extends Service {
  image: string;
}

export const SERVICES: EnhancedService[] = [
  {
    id: '1',
    title: 'Lavagem de alta pressão',
    description: 'Remoção eficaz de sujidade, musgos e resíduos em qualquer superfície vertical.',
    icon: <Droplets className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=70&w=600&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Pintura em geral',
    description: 'Acabamentos de excelência para interiores e exteriores, garantindo durabilidade.',
    icon: <Paintbrush className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1595844730298-b960ff98fee0?q=70&w=600&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Pintura de fachada e moradia',
    description: 'Proteção e renovação estética de superfícies para valorizar o seu imóvel.',
    icon: <Home className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=70&w=600&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Isolamentos térmicos e acústicos',
    description: 'Melhoria do conforto e eficiência energética através de soluções avançadas.',
    icon: <Thermometer className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=70&w=600&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Impermeabilizações',
    description: 'Proteção total de coberturas e fachadas contra infiltrações e humidade.',
    icon: <ShieldCheck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1635834166244-10660f607412?q=70&w=600&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Caleiras e terraços',
    description: 'Instalação e manutenção preventiva para uma drenagem eficiente das águas.',
    icon: <Wrench className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?q=70&w=600&auto=format&fit=crop'
  },
  {
    id: '7',
    title: 'Juntas de dilatação',
    description: 'Intervenção técnica para prevenção e reparação de fissuras estruturais.',
    icon: <Split className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1541888941295-1e87ab2d488d?q=70&w=600&auto=format&fit=crop'
  },
  {
    id: '8',
    title: 'Tubos de algeroz',
    description: 'Limpeza e reparação completa de sistemas de escoamento pluvial.',
    icon: <Pipette className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=70&w=600&auto=format&fit=crop'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'Limpeza de Vidros e Fachadas', category: 'Lavagem Alta Pressão', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=70&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Pintura de Prédio Residencial', category: 'Pintura Especializada', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=70&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Impermeabilização de Coberturas', category: 'Impermeabilizações', image: 'https://images.unsplash.com/photo-1635834166244-10660f607412?q=70&w=800&auto=format&fit=crop' },
  { id: '4', title: 'Manutenção de Caleiras em Prédio', category: 'Caleiras e Algeroz', image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?q=70&w=800&auto=format&fit=crop' },
  { id: '5', title: 'Reparação de Juntas de Dilatação', category: 'Juntas Estruturais', image: 'https://images.unsplash.com/photo-1541888941295-1e87ab2d488d?q=70&w=800&auto=format&fit=crop' },
  { id: '6', title: 'Isolamento Térmico Exterior', category: 'Isolamentos', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=70&w=800&auto=format&fit=crop' }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'João Silva', role: 'Gestor de Condomínio', text: 'Serviço extremamente profissional e rápido. A equipa da RPS resolveu as infiltrações no nosso prédio sem necessidade de andaimes caros.', rating: 5 },
  { id: '2', name: 'Maria Santos', role: 'Proprietária', text: 'Excelente trabalho de pintura na minha moradia. A atenção ao detalhe e o profissionalismo dos técnicos são notáveis.', rating: 5 },
  { id: '3', name: 'Carlos Ferreira', role: 'Diretor de Manutenção', text: 'A RPS é o nosso parceiro de confiança para todos os trabalhos em altura. Segurança máxima e eficiência em cada intervenção.', rating: 5 },
];

export const BENEFITS = [
  { icon: <LayoutGrid className="w-10 h-10" />, title: 'Sem necessidade de andaimes', description: 'Reduzimos o impacto visual e aumentamos a rapidez.' },
  { icon: <Zap className="w-10 h-10" />, title: 'Menor custo operacional', description: 'Soluções mais económicas com a mesma eficácia.' },
  { icon: <Clock className="w-10 h-10" />, title: 'Execução rápida', description: 'Início e conclusão em tempos recorde.' },
  { icon: <ShieldAlert className="w-10 h-10" />, title: 'Máxima segurança', description: 'Técnicos certificados e equipamentos de ponta.' },
  { icon: <Home className="w-10 h-10" />, title: 'Acesso a zonas difíceis', description: 'Chegamos onde os outros não conseguem.' },
];
