import React from 'react';
import { Container } from './ui/Container';
import { Icons } from './ui/Icon';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; delay: number }> = ({ icon, title, delay }) => (
  <div 
    className="flex flex-col items-center text-center p-4"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-2xl bg-gradient-to-br from-emerald-900/50 to-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-900/20 backdrop-blur-sm group hover:scale-110 transition-transform duration-300">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
    </div>
    <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 max-w-[120px]">
      {title}
    </h3>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-8">
      <Container>
        <h2 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Kluczowe Funkcje
        </h2>
        
        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          <FeatureCard 
            icon={<Icons.Scan />} 
            title="Skanuj kody QR" 
            delay={0}
          />
          <FeatureCard 
            icon={<Icons.Calendar />} 
            title="Inteligentne przypomnienia" 
            delay={100}
          />
          <FeatureCard 
            icon={<Icons.Arrows />} 
            title="Śledź pożyczki w obie strony" 
            delay={200}
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;