
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <span className="text-[#ff6b00] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Portfólio</span>
          <h2 className="text-4xl lg:text-6xl font-black">Visão Vertical</h2>
        </div>
      </div>

      <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-8 px-6 pb-20 snap-x">
        {PORTFOLIO.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="min-w-[320px] md:min-w-[600px] h-[450px] relative rounded-[3rem] overflow-hidden snap-center group cursor-pointer"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            
            <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="bg-[#ff6b00] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">
                {item.category}
              </span>
              <h3 className="text-3xl font-black group-hover:text-[#ff6b00] transition-colors">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
