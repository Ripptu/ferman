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
    <div className="bg-white min-h-screen text-gray-900 selection:bg-accent selection:text-primary">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        
        {/* Transitional Banner */}
        <section className="bg-surface py-20 text-center px-6">
           <div className="max-w-4xl mx-auto">
             <h3 className="text-3xl lg:text-5xl font-black text-primary mb-6 uppercase tracking-tighter leading-tight">
                Standard Grün & <br/>Umweltfreundliche Reinigung
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
  );
};

export default App;