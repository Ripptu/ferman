import React from 'react';
import { motion } from 'framer-motion';

export const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-20">
           <h2 className="text-4xl lg:text-6xl text-primary max-w-4xl tracking-tighter leading-[0.95]">
             LASSEN SIE UNS DEN <span className="serif-italic text-5xl lg:text-7xl text-emerald-700">Schmutz</span> ERLEDIGEN, DAMIT SIE <span className="serif-italic text-5xl lg:text-7xl text-emerald-700">Glänzen</span> KÖNNEN.
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Card 1 */}
          <div className="relative group">
            <h3 className="text-6xl md:text-8xl font-black text-accent mb-4 pl-4 tracking-tighter">100%</h3>
            <div className="relative w-full aspect-square bg-primary blob-shape-1 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:rotate-2">
              <img 
                src="https://static.wixstatic.com/media/3ef939_dce0a180f43d4f639677c50027a20bf0~mv2.jpg/v1/fill/w_1143,h_637,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3ef939_dce0a180f43d4f639677c50027a20bf0~mv2.jpg" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" 
                alt="Industrieanlage" 
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                 <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                   <p className="text-white font-bold text-lg text-center leading-tight">Inhabergeführt &<br/>Lokal Verbunden</p>
                 </div>
              </div>
            </div>
            <p className="mt-6 text-center text-gray-700 font-bold max-w-xs mx-auto">
              Als Familienunternehmen stehen wir persönlich für die Qualität unserer Arbeit gerade.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative group md:mt-16">
            <h3 className="text-6xl md:text-8xl font-black text-emerald-800 mb-4 pl-4 tracking-tighter">20+</h3>
            <div className="relative w-full aspect-square bg-surface blob-shape-2 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-rotate-2">
              <img 
                src="https://static.wixstatic.com/media/6069a2_3cfb5d3ceb574042b5ae904e772f90f8~mv2.jpg/v1/fill/w_1143,h_639,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6069a2_3cfb5d3ceb574042b5ae904e772f90f8~mv2.jpg" 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Reinigungsprozess" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                 <div className="bg-accent text-primary p-4 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                   <p className="font-bold text-lg text-center leading-tight">Jahre Erfahrung im Industriesektor</p>
                 </div>
              </div>
            </div>
            <p className="mt-8 text-center text-gray-700 font-bold max-w-xs mx-auto">
              Wir kennen die spezifischen Anforderungen jeder Branche und jeder Maschine.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative group md:mt-32">
             <h3 className="text-6xl md:text-8xl font-black text-accent mb-4 pl-4 tracking-tighter">24/7</h3>
            <div className="relative w-full aspect-square bg-primary blob-shape-3 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:rotate-1">
              <img 
                src="https://static.wixstatic.com/media/6069a2_bdc66746cda346a088951015605757ef~mv2.png/v1/fill/w_1143,h_614,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/6069a2_bdc66746cda346a088951015605757ef~mv2.png" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" 
                alt="Team im Einsatz" 
              />
               <div className="absolute inset-0 flex flex-col justify-end p-8">
                 <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center">
                   <p className="text-white font-bold text-lg leading-tight">Einsatzbereit &<br/>Flexibel</p>
                 </div>
              </div>
            </div>
             <p className="mt-6 text-center text-gray-700 font-bold max-w-xs mx-auto">
              Wir arbeiten dann, wenn Ihre Produktion ruht. An Wochenenden, Feiertagen oder Nachts.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};