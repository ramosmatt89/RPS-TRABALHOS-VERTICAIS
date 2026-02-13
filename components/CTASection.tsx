
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[4rem] bg-[#ff6b00] p-12 lg:p-24 overflow-hidden text-black"
        >
          {/* Animated decorative element */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-96 h-96 border-[40px] border-black/5 rounded-full"
          />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
              A SUA FACHADA EM BOAS MÃOS.
            </h2>
            <div className="flex flex-wrap gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+351926686848"
                className="bg-black text-white px-10 py-6 rounded-2xl font-black text-xl flex items-center gap-4 group"
              >
                <Phone className="group-hover:rotate-12 transition-transform" />
                926 686 848
              </motion.a>
              <motion.a
                href="https://wa.me/351926686848"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-xl font-black group"
              >
                Enviar WhatsApp
                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
            <div className="text-[12rem] font-black tracking-tighter -mb-20">RPS</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
