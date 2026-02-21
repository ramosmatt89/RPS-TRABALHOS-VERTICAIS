
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactForm from './ContactForm';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 lg:pt-20 lg:pb-0"
      style={{ paddingTop: 'calc(env(safe-area-inset-top) + 5rem)' }}
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=75&w=1600&auto=format&fit=crop" 
          alt="Técnicos de acesso por corda RPS em trabalho vertical" 
          className="w-full h-full object-cover scale-110"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          <div className="lg:col-span-7 pt-8 md:pt-0">
            <motion.div style={{ opacity }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 lg:mb-8 hidden md:inline-flex"
              >
                <div className="flex -space-x-1">
                  <div className="w-2 h-2 rounded-full bg-[#ff6b00] animate-ping"></div>
                  <div className="w-2 h-2 rounded-full bg-[#ff6b00] absolute"></div>
                </div>
                <span className="text-white/60 text-[8px] lg:text-[9px] font-black uppercase tracking-[0.25em]">Disponibilidade Imediata • Portugal</span>
              </motion.div>

              <div className="text-mask mb-6 lg:mb-6 mt-10 md:mt-0">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-5xl lg:text-8xl font-black leading-[1.1] tracking-tighter pt-2 lg:pt-4 mt-0"
                >
                  SOLUÇÕES <br /> 
                  EM <span className="orange-accent">ALTURA</span>
                </motion.h1>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base lg:text-xl text-gray-400 mb-6 lg:mb-10 max-w-lg font-light leading-relaxed"
              >
                Trabalhos verticais de elite. Sem necessidade de andaimes, com segurança certificada e execução recorde.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 lg:gap-10 mb-0"
              >
                <div>
                  <div className="text-2xl lg:text-3xl font-black">100%</div>
                  <div className="text-[8px] lg:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Segurança</div>
                </div>
                <div className="h-8 lg:h-10 w-[1px] bg-white/10"></div>
                <div>
                  <div className="text-2xl lg:text-3xl font-black">+2k</div>
                  <div className="text-[8px] lg:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Projetos</div>
                </div>
                <div className="h-8 lg:h-10 w-[1px] bg-white/10"></div>
                <div>
                  <div className="text-2xl lg:text-3xl font-black">24h</div>
                  <div className="text-[8px] lg:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Resposta</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:pt-32 mt-2 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pb-10 lg:pb-0"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
