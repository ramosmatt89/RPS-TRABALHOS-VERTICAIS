
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="servicos" className="py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-[1px] bg-[#ff6b00]"></div>
              <span className="text-[#ff6b00] font-black uppercase tracking-[0.3em] text-[10px]">Nossas Competências</span>
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">Engenharia de Acesso e Manutenção</h2>
          </div>
          <p className="text-gray-500 max-w-sm mb-2 font-medium">
            Desenvolvemos métodos de intervenção que garantem a integridade da sua fachada com o mínimo de transtorno.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="group relative bg-[#111] border border-white/5 p-8 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-[#ff6b00]/30 min-h-[300px] flex flex-col"
            >
              {/* Image BG on hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale" />
              </div>
              
              <div className="absolute inset-0 bg-[#ff6b00] translate-y-full group-hover:translate-y-[85%] transition-transform duration-700 ease-[0.16, 1, 0.3, 1] opacity-10 z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#ff6b00]/10 text-white group-hover:text-[#ff6b00]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#ff6b00] transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
