import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Wir haben schon viele Reinigungsfirmen ausprobiert, aber das Team von Ferman ist auf einem anderen Level. Pünktlich, extrem gründlich und super freundlich.",
    author: "Thomas Müller",
    role: "Produktionsleiter, AutoParts GmbH",
    image: "https://picsum.photos/100/100?random=50"
  },
  {
    text: "Die Trockeneisreinigung unserer Druckmaschinen war beeindruckend. Keine Rückstände, keine Ausfallzeiten. Absolut empfehlenswert!",
    author: "Sarah Schmidt",
    role: "Geschäftsführerin, Schmidt Druck",
    image: "https://picsum.photos/100/100?random=51"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-4xl lg:text-5xl text-primary mb-8 uppercase tracking-tighter leading-none">
            Was unsere Nachbarn <br/>über uns sagen
          </h2>
          
          <div className="relative">
             <Quote className="absolute -top-6 -left-6 text-accent/30 w-20 h-20" />
             <div className="space-y-12">
               {testimonials.map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-surface p-8 rounded-tr-3xl rounded-bl-3xl border-l-4 border-accent"
                 >
                   <div className="flex gap-1 mb-4 text-accent">
                     {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <p className="text-gray-800 italic text-lg mb-6 font-medium">"{item.text}"</p>
                   <div className="flex items-center gap-4">
                     <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full object-cover" />
                     <div>
                       <h4 className="font-black text-primary tracking-tight">{item.author}</h4>
                       <span className="text-sm text-gray-600 font-bold">{item.role}</span>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>

        <div className="relative h-[600px] hidden lg:block">
           <div className="absolute inset-0 bg-accent rounded-[100px_0_100px_0] transform rotate-3 opacity-20"></div>
           <div className="absolute inset-4 overflow-hidden rounded-[100px_0_100px_0] shadow-2xl">
             <img 
              src="https://static.wixstatic.com/media/6069a2_5d8942454bb743a0b25f082f20240d67~mv2.jpg/v1/fill/w_1143,h_705,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6069a2_5d8942454bb743a0b25f082f20240d67~mv2.jpg" 
              className="w-full h-full object-cover" 
              alt="Happy Client" 
            />
             <div className="absolute bottom-10 right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
               <p className="text-primary font-black text-xl mb-1 tracking-tight">4.9/5</p>
               <div className="flex gap-1 text-yellow-400 mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <p className="text-sm text-gray-500 font-medium">Basierend auf über 100 Bewertungen lokaler Industrieunternehmen.</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};