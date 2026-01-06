import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Sparkles, PaintBucket, snowflake, Factory, ShieldCheck, Snowflake } from 'lucide-react';

const services = [
  {
    icon: Factory,
    title: "Industriereinigung",
    description: "Umfassende Reinigung von Produktionshallen und Industrieanlagen nach höchsten Standards."
  },
  {
    icon: Settings,
    title: "Maschinenreinigung",
    description: "Präzise Reinigung sensibler Maschinenteile zur Sicherung Ihrer Produktivität."
  },
  {
    icon: Snowflake,
    title: "Trockeneisstrahlen",
    description: "Schonende und rückstandsfreie Entfernung von Verschmutzungen ohne Wasser oder Chemie."
  },
  {
    icon: PaintBucket,
    title: "Malerarbeiten",
    description: "Industrieanstriche und Bodenbeschichtungen für Sicherheit und Werterhalt."
  },
  {
    icon: Sparkles,
    title: "Grundreinigung",
    description: "Intensive Pflege für Böden und Oberflächen, um den Neuzustand wiederherzustellen."
  },
  {
    icon: ShieldCheck,
    title: "Wartung & Instandhaltung",
    description: "Regelmäßige Kontrollen und Pflege zur Vermeidung von Produktionsausfällen."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl text-primary mb-6 leading-[0.9] tracking-tighter">
            RUNDUM <span className="serif-italic text-5xl lg:text-7xl text-emerald-700">Sauber.</span> <br />
            <span className="text-secondary">PROFESSIONELL <span className="serif-italic text-5xl lg:text-7xl text-secondary">Gereinigt.</span></span>
          </h2>
          <p className="text-gray-600 font-medium text-lg">
            Wir bieten mehr als nur Sauberkeit. Wir bieten Werterhalt für Ihre Industrieanlagen durch spezialisierte Reinigungsverfahren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-emerald-800 mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                <service.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black text-primary mb-3 tracking-tight">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};