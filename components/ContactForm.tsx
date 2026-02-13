
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="relative group">
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b00] to-orange-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      <div className="relative bg-black/40 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
        <h3 className="text-2xl font-bold mb-1">Entre em contacto</h3>
        <p className="text-gray-400 text-sm mb-8">Resposta técnica em menos de 24 horas.</p>
        
        <form className="space-y-5">
          <div className="relative">
            <input 
              required
              type="text" 
              placeholder="Nome completo"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-[#ff6b00] outline-none transition-all placeholder:text-white/20"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              required
              type="email" 
              placeholder="E-mail"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-[#ff6b00] outline-none transition-all placeholder:text-white/20"
            />
            <input 
              required
              type="tel" 
              placeholder="Telemóvel"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-[#ff6b00] outline-none transition-all placeholder:text-white/20"
            />
          </div>

          <textarea 
            rows={2}
            placeholder="O que precisa? (ex: pintura, limpeza...)"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-[#ff6b00] outline-none transition-all placeholder:text-white/20 resize-none"
          ></textarea>
          
          <motion.button
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#ff6b00] text-black font-black py-5 rounded-2xl shadow-xl shadow-orange-600/20 flex items-center justify-center gap-3 group transition-colors hover:bg-orange-500"
          >
            Fale Connosco Agora
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </form>
        
        <div className="mt-6 flex items-center justify-center gap-2 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Parceiro Certificado</span>
          <div className="w-1 h-1 rounded-full bg-white/20"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Alpinismo Industrial</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
