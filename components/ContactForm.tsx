
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulação de envio para o Vercel/API
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative group">
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b00] to-orange-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      <div className="relative bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/10 p-8 lg:p-10 rounded-[2.5rem] shadow-2xl">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-2xl font-bold mb-1">Entre em contacto</h3>
              <p className="text-gray-400 text-sm mb-8">Resposta técnica rápida em todo Portugal.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input 
                    required
                    name="name"
                    type="text" 
                    aria-label="Nome completo"
                    placeholder="Nome completo"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-[#ff6b00] outline-none transition-all placeholder:text-white/20 text-white"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    required
                    name="email"
                    type="email" 
                    aria-label="E-mail"
                    placeholder="E-mail"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-[#ff6b00] outline-none transition-all placeholder:text-white/20 text-white"
                  />
                  <input 
                    required
                    name="phone"
                    type="tel" 
                    aria-label="Telemóvel"
                    placeholder="Telemóvel"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-[#ff6b00] outline-none transition-all placeholder:text-white/20 text-white"
                  />
                </div>

                <textarea 
                  required
                  name="message"
                  rows={2}
                  aria-label="Mensagem"
                  placeholder="O que precisa? (ex: pintura, limpeza...)"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-[#ff6b00] outline-none transition-all placeholder:text-white/20 resize-none text-white"
                ></textarea>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#ff6b00] text-black font-black py-5 rounded-2xl shadow-xl shadow-orange-600/20 flex items-center justify-center gap-3 group transition-colors hover:bg-orange-500 mt-2"
                >
                  Fale Connosco
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
              <p className="text-gray-400">Agradecemos o contacto. A nossa equipa técnica entrará em contacto brevemente.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-[#ff6b00] font-bold text-sm uppercase tracking-widest hover:underline"
              >
                Enviar outra mensagem
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="mt-8 flex items-center justify-center gap-2 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all border-t border-white/5 pt-6">
          <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Certificação Técnica</span>
          <div className="w-1 h-1 rounded-full bg-white/20"></div>
          <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Segurança Máxima</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;