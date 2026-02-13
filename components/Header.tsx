
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Portfólio', href: '#portfolio' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass-nav rounded-3xl px-8 py-4 flex items-center justify-between transition-all ${isScrolled ? 'shadow-2xl' : ''}`}>
          <a href="#inicio" className="flex items-center gap-3 group" aria-label="Voltar ao início">
            <div className="w-10 h-10 bg-[#ff6b00] rounded-xl flex items-center justify-center font-black text-black group-hover:rotate-6 transition-transform">R</div>
            <span className="text-lg font-black uppercase tracking-tighter">
              RPS <span className="text-zinc-400">TRABALHOS VERTICAIS</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-[#ff6b00] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+351926686848" className="hidden md:flex items-center gap-2 text-[#ff6b00] font-black text-xs uppercase tracking-widest hover:brightness-125 transition-all">
              926 686 848
              <ArrowUpRight size={14} />
            </a>
            <button 
              className="lg:hidden text-white p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 z-[90] lg:hidden bg-[#0a0a0a]/98 backdrop-blur-2xl p-6 pt-32"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-4xl font-black hover:text-[#ff6b00] transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] bg-white/10 w-full mt-4"></div>
              <div className="flex flex-col gap-2">
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Contacto Urgente</span>
                <a href="tel:+351926686848" className="text-3xl font-black text-[#ff6b00]">926 686 848</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;