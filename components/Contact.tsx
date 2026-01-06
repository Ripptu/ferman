import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, ArrowRight, Check, ArrowLeft, Factory, Settings, PaintBucket, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact-wizard" className="bg-primary text-white py-24 relative overflow-hidden">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left info side */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-6xl tracking-tighter mb-6 leading-[0.9]">
              LASSEN SIE UNS <br/><span className="serif-italic text-5xl lg:text-7xl text-accent">Durchstarten</span>
            </h2>
            <p className="text-emerald-100/80 text-lg mb-10 leading-relaxed font-medium">
              Keine langen Formulare. Beantworten Sie uns 3 kurze Fragen und wir erstellen das perfekte Reinigungskonzept für Ihre Industrieanlage.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors">
                   <Phone size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-accent uppercase tracking-widest font-bold">Direkter Draht</p>
                   <p className="font-bold text-xl">+49 (0) 123 456 789</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors">
                   <Mail size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-accent uppercase tracking-widest font-bold">Schreiben Sie uns</p>
                   <p className="font-bold text-xl">info@ferman-service.de</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Wizard Side */}
          <div className="lg:w-2/3">
            <WizardForm />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Wizard Components ---

const steps = [
  { id: 1, question: "Wobei dürfen wir Sie unterstützen?" },
  { id: 2, question: "Wie groß ist die zu reinigende Fläche?" },
  { id: 3, question: "Wie erreichen wir Sie am besten?" },
  { id: 4, question: "Vielen Dank!" }
];

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    service: '',
    size: '',
    name: '',
    email: ''
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleSelection = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
    // Small delay to show selection before moving
    setTimeout(nextStep, 300);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 min-h-[500px] flex flex-col relative overflow-hidden shadow-2xl">
      
      {/* Progress Bar */}
      {currentStep < 3 && (
        <div className="absolute top-0 left-0 w-full h-2 bg-white/5">
          <motion.div 
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}

      {/* Back Button */}
      {currentStep > 0 && currentStep < 3 && (
        <button onClick={prevStep} className="absolute top-8 left-8 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
          <ArrowLeft size={16} /> Zurück
        </button>
      )}

      {/* Steps Content */}
      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          
          {/* Step 1: Service */}
          {currentStep === 0 && (
            <StepWrapper key="step1">
              <h3 className="text-3xl md:text-4xl font-black mb-8">{steps[0].question}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceOption 
                  icon={Factory} 
                  label="Industriereinigung" 
                  onClick={() => handleSelection('service', 'Industrie')} 
                />
                <ServiceOption 
                  icon={Settings} 
                  label="Maschinenreinigung" 
                  onClick={() => handleSelection('service', 'Maschinen')} 
                />
                <ServiceOption 
                  icon={Sparkles} 
                  label="Trockeneis" 
                  onClick={() => handleSelection('service', 'Trockeneis')} 
                />
                <ServiceOption 
                  icon={PaintBucket} 
                  label="Malerarbeiten" 
                  onClick={() => handleSelection('service', 'Maler')} 
                />
              </div>
            </StepWrapper>
          )}

          {/* Step 2: Size */}
          {currentStep === 1 && (
             <StepWrapper key="step2">
              <h3 className="text-3xl md:text-4xl font-black mb-8">{steps[1].question}</h3>
              <div className="space-y-4">
                {['Kleiner als 100 m²', '100 m² - 500 m²', '500 m² - 1.000 m²', 'Größer als 1.000 m²'].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSelection('size', size)}
                    className="w-full text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 font-bold text-lg flex justify-between group"
                  >
                    {size}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </button>
                ))}
              </div>
             </StepWrapper>
          )}

          {/* Step 3: Contact Details */}
          {currentStep === 2 && (
            <StepWrapper key="step3">
              <h3 className="text-3xl md:text-4xl font-black mb-8">{steps[2].question}</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-accent mb-2">Ihr Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-white/20 text-2xl md:text-3xl py-2 focus:border-accent outline-none font-bold placeholder-white/20 transition-colors"
                    placeholder="Max Mustermann"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-accent mb-2">Email oder Telefon</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-white/20 text-2xl md:text-3xl py-2 focus:border-accent outline-none font-bold placeholder-white/20 transition-colors"
                    placeholder="max@firma.de"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="pt-4">
                  <Button onClick={nextStep} className="w-full justify-center py-4 text-lg">
                    Angebot jetzt anfordern
                  </Button>
                </div>
              </div>
            </StepWrapper>
          )}

          {/* Step 4: Success */}
          {currentStep === 3 && (
            <StepWrapper key="step4">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                  <Check size={48} strokeWidth={3} />
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-4">Anfrage erhalten!</h3>
                <p className="text-xl text-emerald-100/80 mb-8 font-medium">
                  Danke {formData.name}. Wir melden uns in Kürze bei Ihnen bezüglich der {formData.service} Reinigung.
                </p>
                <button 
                  onClick={() => {setCurrentStep(0); setFormData({service: '', size: '', name: '', email: ''})}}
                  className="text-accent font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Neue Anfrage starten
                </button>
              </div>
            </StepWrapper>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

const StepWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="w-full"
  >
    {children}
  </motion.div>
);

const ServiceOption = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) => (
  <button
    onClick={onClick}
    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 flex flex-col items-center gap-4 group text-center"
  >
    <Icon className="w-10 h-10 text-accent group-hover:scale-110 transition-transform" />
    <span className="font-bold text-lg">{label}</span>
  </button>
);