import React from 'react';
import { Container } from './ui/Container';
import { Icons } from './ui/Icon';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; delay: number }> = ({ icon, title, delay }) => (
  <div 
    className="flex flex-col items-center text-center p-4 group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="relative mb-4 transition-transform duration-300 group-hover:scale-110">
        {/* Glow effect behind the icon */}
        <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-white to-emerald-50/50 dark:from-emerald-900/40 dark:to-[#0a0f0d] border border-emerald-100 dark:border-white/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xl shadow-emerald-100/50 dark:shadow-black/50 backdrop-blur-sm">
             {React.cloneElement(icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
        </div>
    </div>
    <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 max-w-30 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
      {title}
    </h3>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-8 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 h-50 sm:w-125 sm:h-125 bg-emerald-400/10 dark:bg-emerald-500/5 blur-[60px] sm:blur-[100px] rounded-full pointer-events-none"></div>

      <Container className="relative z-10">
        <h2 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Kluczowe funkcje
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