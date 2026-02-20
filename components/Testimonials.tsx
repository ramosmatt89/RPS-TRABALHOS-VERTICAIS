
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testemunhos" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Feedback</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4">O que dizem os nossos clientes</h2>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible no-scrollbar snap-x md:snap-none pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 lg:p-10 rounded-3xl relative min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center flex flex-col"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-black shadow-lg shadow-amber-500/20">
                <Quote size={24} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center font-bold text-amber-500 border border-amber-500/30">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
