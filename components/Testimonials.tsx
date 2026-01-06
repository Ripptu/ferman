import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TestimonialsColumn, Testimonial } from './ui/testimonials-columns';

const testimonialsData: Testimonial[] = [
  {
    text: "Endlich eine Reinigungsfirma, die mitdenkt. Die Jungs haben unsere Maschinen am Wochenende gereinigt, Montag lief alles wie neu. Top!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    name: "Markus Weber",
    role: "Produktionsleiter, Weber Metallbau",
  },
  {
    text: "Die Trockeneisreinigung hat uns zwei Tage Stillstand gespart. Wahnsinn, was da noch runterkam. Sehr sympathisches Team.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    name: "Sabine Kroll",
    role: "Werksleitung, ChemTech AG",
  },
  {
    text: "Wir haben lange gesucht, um jemanden für unsere hohen Hallendecken zu finden. Ferman hat das super sicher und sauber gelöst.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    name: "Hakan Yilmaz",
    role: "Facility Manager, Logistikzentrum Nord",
  },
  {
    text: "Sehr flexibel bei kurzfristigen Einsätzen. Wenn es brennt, sind sie da. Das schätzen wir sehr an der Zusammenarbeit.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    name: "Julia Bauer",
    role: "Geschäftsführerin, Bauer & Söhne",
  },
  {
    text: "Freundlich, pünktlich und vor allem: gründlich. Die Dokumentation der Reinigung ist auch vorbildlich für unsere Audits.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    name: "Thomas Lang",
    role: "Qualitätsmanagement, FoodPro GmbH",
  },
  {
    text: "Der Boden in Halle 3 sah aus wie eine Mondlandschaft. Nach der Grundreinigung und Versiegelung erkennen wir ihn kaum wieder.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    name: "Michael Schmidt",
    role: "Instandhaltung, Schmidt Automotive",
  },
  {
    text: "Keine versteckten Kosten, klare Absprachen. So muss Handwerk laufen. Gerne wieder!",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200",
    name: "Lisa Franke",
    role: "Einkauf, Druckerei Franke",
  },
  {
    text: "Unser Maschinenpark ist heilig. Das Team von Ferman geht da mit einer Sorgfalt ran, als wären es ihre eigenen Maschinen.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    name: "David Koch",
    role: "Betriebsleiter",
  },
  {
    text: "Super Job bei der Bauendreinigung unserer neuen Lagerhalle. Ging schneller als gedacht und alles blitzeblank.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    name: "Sarah M.",
    role: "Projektleitung Bau",
  },
];

const firstColumn = testimonialsData.slice(0, 3);
const secondColumn = testimonialsData.slice(3, 6);
const thirdColumn = testimonialsData.slice(6, 9);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-emerald-800 mb-6">
            <Quote size={24} fill="currentColor" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl text-primary mb-6 leading-[0.9] tracking-tighter font-black">
            WAS UNSERE <span className="serif-italic text-5xl lg:text-7xl text-emerald-700 font-normal normal-case">Nachbarn</span> <br/>
            ÜBER UNS <span className="serif-italic text-5xl lg:text-7xl text-emerald-700 font-normal normal-case">Sagen.</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
            Ehrliches Feedback von echten Partnern. Wir sind stolz darauf, dass viele unserer Kunden seit Jahren auf uns zählen.
          </p>
        </motion.div>

        {/* Infinite Scroll Columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={45} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block pt-12" duration={55} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={50} />
        </div>

      </div>
    </section>
  );
};