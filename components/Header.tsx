import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
           <img 
            src="https://static.wixstatic.com/media/6069a2_abde3c251f304c0eb4f0a819cb225f76~mv2.png/v1/fill/w_234,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ferman%20industrieservice%20logo_edited.png" 
            alt="Ferman Industrieservice" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Über uns', 'Services', 'Team', 'Referenzen', 'Karriere'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm font-semibold text-gray-700 hover:text-primary relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button variant="primary" className="text-xs px-6 py-2.5">
            Kontaktieren
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 lg:hidden flex flex-col gap-4"
        >
          {['Über uns', 'Services', 'Team', 'Referenzen', 'Karriere'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
           <Button className="w-full justify-center mt-4">Kontaktieren</Button>
        </motion.div>
      )}
    </motion.header>
  );
};