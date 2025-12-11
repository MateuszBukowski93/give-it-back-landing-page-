import React from 'react';
import { Container } from './ui/Container';
import { Icons } from './ui/Icon';

const Premium: React.FC = () => {
  return (
    <section className="py-8">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-[#0f1110] border border-white/10 p-5 flex items-center gap-5 shadow-lg max-w-lg mx-auto">
           {/* Background gradient spot */}
           <div className="absolute -left-10 -top-10 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl"></div>

           <div className="flex-shrink-0">
             <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-600/20 to-yellow-900/10 border border-yellow-600/30 text-yellow-500">
                <Icons.Crown size={24} fill="currentColor" />
             </div>
           </div>
           
           <div className="flex-1">
             <h3 className="text-base font-bold text-white mb-1">
               Wersja Premium
             </h3>
             <p className="text-xs text-gray-400 leading-relaxed">
               Odblokuj nieograniczoną liczbę przedmiotów, usuń reklamy i wspieraj rozwój aplikacji.
             </p>
           </div>
        </div>
      </Container>
    </section>
  );
};

export default Premium;
