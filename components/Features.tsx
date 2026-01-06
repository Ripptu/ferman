import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Leaf, Zap } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Maximale Flexibilität",
    description: "Wir reinigen, wenn Ihre Produktion ruht. Nachts, am Wochenende oder an Feiertagen – damit Ihr Betrieb nahtlos weiterläuft."
  },
  {
    icon: ShieldCheck,
    title: "Höchste Sicherheit",
    description: "Arbeitsschutz und zertifizierte Prozesse stehen an erster Stelle. Unser Team ist umfassend geschult und ausgerüstet."
  },
  {
    icon: Leaf,
    title: "100% Umweltbewusst",
    description: "Wir setzen auf biologisch abbaubare Mittel und chemiefreie Verfahren wie Trockeneisstrahlen für eine grüne Bilanz."
  },
  {
    icon: Zap,
    title: "Modernste Technik",
    description: "Hochleistungsmaschinen und innovative Reinigungstechnologie sorgen für effiziente und gründliche Ergebnisse."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300 relative z-10">
                  <feature.icon size={30} className="text-accent group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                </div>
                {/* Icon glow effect */}
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors tracking-tight">
                {feature.title}
              </h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};