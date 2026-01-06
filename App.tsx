import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-accent selection:text-primary relative">
      {/* Global Background Glow - Adapted to Emerald/Lime theme */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 0%, #ecfccb 0%, transparent 60%),
            radial-gradient(circle at 80% 60%, #f0fdf4 0%, transparent 50%)
          `,
          opacity: 0.8,
          mixBlendMode: "multiply",
        }}
      />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Stats />
          
          {/* Transitional Banner */}
          <section className="bg-surface/50 backdrop-blur-sm py-24 text-center px-6 border-y border-white/50">
             <div className="max-w-4xl mx-auto">
               <h3 className="text-3xl lg:text-5xl font-black text-primary mb-6 uppercase tracking-tighter leading-tight">
                  Standard <span className="serif-italic text-4xl lg:text-6xl text-emerald-700 normal-case">Grün</span> & <br/>
                  Umweltfreundliche <span className="serif-italic text-4xl lg:text-6xl text-emerald-700 normal-case">Reinigung</span>
               </h3>
               <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                 Unsere gründliche Checkliste stellt sicher, dass jede Ecke Ihrer Anlage die Aufmerksamkeit erhält, die sie verdient. 
                 Wir nutzen, wo immer möglich, biologisch abbaubare Mittel und Trockeneisverfahren.
               </p>
             </div>
          </section>

          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;