
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,107,0,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1524514587686-e2909d736e9b?q=70&w=800&auto=format&fit=crop" 
                alt="Profissional de Alpinismo Industrial RPS em rapel" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
            </div>
            {/* Float Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-[#ff6b00] text-black p-10 rounded-[2.5rem] shadow-2xl hidden md:block"
            >
              <div className="text-5xl font-black mb-1">15+</div>
              <div className="text-[10px] font-black uppercase tracking-widest">Anos em<br/>Portugal</div>
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-[#ff6b00] font-black uppercase tracking-[0.3em] text-[10px] block mb-4">Manifesto Técnico</span>
              <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">Trabalho <br /> Sem Limites.</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Na RPS, não vemos apenas prédios; vemos estruturas complexas que exigem cuidado cirúrgico. Nossa especialidade é o acesso difícil através de alpinismo industrial, entregando resultados onde máquinas e andaimes falham.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                { icon: <Shield />, title: "Segurança Certificada", desc: "Rigores IRATA e normas europeias em todas as cordas." },
                { icon: <Target />, title: "Precisão Vertical", desc: "Focamos no detalhe, da limpeza à impermeabilização." },
                { icon: <Zap />, title: "Rapidez Tática", desc: "Montagem de sistemas em minutos, não dias." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#ff6b00] group-hover:bg-[#ff6b00] group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
