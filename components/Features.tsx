import React from 'react';
import { Container } from './ui/Container';
import { Icons } from './ui/Icon';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <div 
    className="flex flex-col items-center text-center p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/50 dark:to-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-lg shadow-emerald-900/5 dark:shadow-emerald-900/20 backdrop-blur-sm group hover:scale-110 transition-transform duration-300">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
    </div>
    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-black">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Jak to działa?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard 
            icon={<Icons.Users />} 
            title="Integracja z kontaktami" 
            description="Wybieraj osoby bezpośrednio z książki telefonicznej. Szybko i wygodnie przypisuj przedmioty do znajomych."
            delay={0}
          />
          <FeatureCard 
            icon={<Icons.Bell />} 
            title="Powiadomienia Push" 
            description="Aplikacja sama wyśle Ci przypomnienie na telefon, gdy minie ustalony termin zwrotu przedmiotu."
            delay={100}
          />
          <FeatureCard 
            icon={<Icons.Arrows />} 
            title="Historia pożyczek" 
            description="Miej pełną kontrolę nad tym, co pożyczasz innym i co inni pożyczyli Tobie. Wszystko w jednym miejscu."
            delay={200}
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;