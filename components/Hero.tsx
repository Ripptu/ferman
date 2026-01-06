import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-wizard');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 px-6 lg:px-16 flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-accent/20 text-emerald-800 text-sm font-bold tracking-widest uppercase">
            Seit über 20 Jahren
          </div>
          <h1 className="text-5xl lg:text-7xl text-primary leading-[0.95] mb-8 tracking-tighter">
            WIR BRINGEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-600">SAUBERKEIT</span>,<br />
            SIE BEHALTEN DEN FOKUS.
          </h1>
          <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed font-medium">
            Industriereinigung ist Vertrauenssache. Unser geschultes Team sorgt für glänzende Maschinen und saubere Hallen, damit Ihre Produktion reibungslos läuft.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button variant="primary" onClick={scrollToContact}>
              Angebot Anfordern <ArrowRight size={18} />
            </Button>
            <button className="flex items-center gap-3 px-6 py-3 text-primary font-bold hover:text-secondary transition-colors group tracking-tight">
              <span className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-primary transition-colors">
                <Play size={16} className="ml-1" />
              </span>
              Video ansehen
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/100/100?random=${i+20}`} 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  alt="Team member" 
                />
              ))}
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-black text-primary">150+</span> Zufriedene Kunden
            </div>
          </div>
        </motion.div>

        {/* Right Image Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full flex justify-center items-center"
        >
          {/* Abstract Green Shape Background */}
          <div className="absolute inset-0 bg-primary/10 blob-shape-1 rotate-12 transform scale-110 z-0" />
          
          {/* Main Image Container */}
          <div className="relative w-full h-full z-10">
             {/* Large Main Image - Swapped to Landscape/Machine image */}
             <div className="absolute top-0 right-0 w-4/5 h-4/5 overflow-hidden blob-shape-2 shadow-2xl">
                <img 
                  src="https://static.wixstatic.com/media/6069a2_ed5bffc60ce641828bcf3e21be2db3a2~mv2.png/v1/fill/w_1143,h_618,al_t,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/6069a2_ed5bffc60ce641828bcf3e21be2db3a2~mv2.png" 
                  alt="Industriereinigung Machine" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
             </div>
             
             {/* Small Floating Image - Swapped to Portrait/Worker image */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               className="absolute bottom-0 left-0 w-1/2 h-1/2 overflow-hidden blob-shape-3 shadow-xl border-4 border-white"
             >
               <img 
                 src="https://static.wixstatic.com/media/6069a2_060d5022f9474ec7b101541260fdbe5c~mv2.jpg/v1/fill/w_956,h_1146,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6069a2_060d5022f9474ec7b101541260fdbe5c~mv2.jpg" 
                 alt="Worker" 
                 className="w-full h-full object-cover"
               />
             </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};