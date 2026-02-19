
import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="bg-industrial pt-20 pb-10 border-t border-white/5"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 2rem)' }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#ff6b00] rounded flex items-center justify-center font-black text-black text-sm">
                R
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase">
                RPS <span className="text-zinc-400">TRABALHOS VERTICAIS</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Especialistas em manutenção industrial e residencial por corda. Atuamos em todo o território nacional com rigor e segurança máxima.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff6b00] hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff6b00] hover:text-black transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-[#ff6b00]">Serviços Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#servicos" className="hover:text-white transition-colors">Limpeza de Fachadas</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Pintura de Prédios</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Impermeabilização</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Caleiras e Telhados</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Manutenção Estrutural</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-[#ff6b00]">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <div className="text-[#ff6b00]"><Phone size={16} /></div>
                926 686 848
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <div className="text-[#ff6b00]"><Mail size={16} /></div>
                geral@rpstrabalhosverticais.pt
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <div className="text-[#ff6b00]"><MapPin size={16} /></div>
                Portugal (Atendimento Nacional)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-[#ff6b00]">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Receba novidades e dicas de manutenção técnica.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                required
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-[#ff6b00] w-full text-white"
              />
              <button type="submit" className="bg-[#ff6b00] text-black p-2 rounded-lg hover:bg-orange-500 transition-all">
                <ArrowUp size={20} className="rotate-45" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            © 2024 RPS Trabalhos Verticais. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-600">
            <a href="#" className="hover:text-[#ff6b00]">Política de Privacidade</a>
            <a href="#" className="hover:text-[#ff6b00]">Termos de Serviço</a>
          </div>
          <button 
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#ff6b00] hover:text-black transition-all"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
