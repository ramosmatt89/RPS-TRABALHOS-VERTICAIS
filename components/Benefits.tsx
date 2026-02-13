
import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-industrial">
      <div className="container mx-auto px-6">
        <div className="bg-amber-500 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-industrial/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-industrial text-4xl lg:text-5xl font-black mb-6">Porquê escolher o acesso por corda?</h2>
              <p className="text-industrial/80 text-lg font-medium leading-relaxed mb-8">
                O acesso industrial por corda é o método mais seguro, rápido e económico para trabalhos em altura. Sem andaimes, sem bloqueios de via pública, apenas eficiência.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-amber-500 bg-industrial flex items-center justify-center text-amber-500 font-black">
                      {i === 1 ? 'A' : i === 2 ? 'R' : 'C'}
                    </div>
                  ))}
                </div>
                <span className="text-industrial text-xs font-black uppercase tracking-widest">Equipa Certificada IRATA</span>
              </div>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-8">
              {BENEFITS.slice(0, 4).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="text-industrial opacity-80">
                    {benefit.icon}
                  </div>
                  <h3 className="text-industrial text-xl font-bold">{benefit.title}</h3>
                  <p className="text-industrial/70 text-sm font-medium leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
