
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
          className="relative rounded-[2.5rem] lg:rounded-[4rem] bg-[#ff6b00] p-8 lg:p-24 overflow-hidden text-black"
        >
          {/* Animated decorative element */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-96 h-96 border-[40px] border-black/5 rounded-full"
          />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl lg:text-7xl font-black mb-8 lg:mb-10 leading-[0.9] tracking-tighter">
              A SUA FACHADA EM BOAS MÃOS.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+351926686848"
                className="bg-black text-white px-8 lg:px-10 py-4 lg:py-6 rounded-xl lg:rounded-2xl font-black text-lg lg:text-xl flex items-center justify-center gap-4 group"
              >
                <Phone className="group-hover:rotate-12 transition-transform" />
                926 686 848
              </motion.a>
              <motion.a
                href="https://wa.me/351926686848"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center justify-center gap-4 text-lg lg:text-xl font-black group py-2"
              >
                Enviar WhatsApp
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
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
