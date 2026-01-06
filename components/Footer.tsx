import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 text-emerald-100/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <div>
           <img 
            src="https://static.wixstatic.com/media/6069a2_abde3c251f304c0eb4f0a819cb225f76~mv2.png/v1/fill/w_234,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ferman%20industrieservice%20logo_edited.png" 
            alt="Ferman Industrieservice" 
            className="h-10 w-auto mb-6 brightness-0 invert opacity-90"
          />
          <p className="text-sm leading-relaxed mb-6">
            Ihr Partner für professionelle Industriereinigung. Wir setzen auf Qualität, Umweltbewusstsein und langfristige Partnerschaften.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Home</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Über Uns</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Unsere Services</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Warum Ferman?</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Nachhaltigkeit</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Karriere</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Industriereinigung</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Maschinenreinigung</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Trockeneisstrahlen</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Malerarbeiten</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Hallenreinigung</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Kontakt</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="bg-accent/20 p-1 rounded text-accent">📍</span>
              Musterstraße 12<br/>12345 Musterstadt
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-accent/20 p-1 rounded text-accent">📞</span>
              +49 (0) 123 4567 89
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-accent/20 p-1 rounded text-accent">✉️</span>
              info@ferman-service.de
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2024 Ferman Industrieservice. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Impressum</a>
          <a href="#" className="hover:text-white">Datenschutz</a>
          <a href="#" className="hover:text-white">AGB</a>
        </div>
      </div>
    </footer>
  );
};