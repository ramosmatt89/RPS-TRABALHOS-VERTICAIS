
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
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-2 lg:py-4' : 'py-4 lg:py-8'}`}
      style={{ paddingTop: `calc(env(safe-area-inset-top) + ${isScrolled ? '0.5rem' : '1rem'})` }}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className={`glass-nav rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between transition-all ${isScrolled ? 'shadow-2xl' : ''}`}>
          <a href="#inicio" className="flex items-center gap-2 lg:gap-3 group" aria-label="Voltar ao início">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#ff6b00] rounded-lg lg:rounded-xl flex items-center justify-center font-black text-black group-hover:rotate-6 transition-transform text-sm lg:text-base">R</div>
            <span className="text-sm lg:text-lg font-black uppercase tracking-tighter">
              RPS <span className="text-zinc-400 hidden sm:inline">TRABALHOS VERTICAIS</span>
              <span className="text-zinc-400 sm:hidden">VERTICAIS</span>
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

          <div className="flex items-center gap-2 lg:gap-4">
            <a href="tel:+351926686848" className="hidden sm:flex items-center gap-2 text-[#ff6b00] font-black text-[10px] lg:text-xs uppercase tracking-widest hover:brightness-125 transition-all">
              926 686 848
              <ArrowUpRight size={14} />
            </a>
            <button 
              className="lg:hidden text-white p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-0 top-0 z-[90] lg:hidden bg-[#0a0a0a]/98 backdrop-blur-2xl p-6 flex flex-col"
            style={{ paddingTop: 'calc(env(safe-area-inset-top) + 6rem)' }}
          >
            <div className="flex flex-col gap-6 overflow-y-auto no-scrollbar pb-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-3xl font-black hover:text-[#ff6b00] transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] bg-white/10 w-full mt-2"></div>
              <div className="flex flex-col gap-2">
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Contacto Urgente</span>
                <a href="tel:+351926686848" className="text-2xl font-black text-[#ff6b00]">926 686 848</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;