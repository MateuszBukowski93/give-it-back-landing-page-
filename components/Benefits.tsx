import React from 'react';
import { Container } from './ui/Container';
import { Icons } from './ui/Icon';

const BenefitItem: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
    <div className="flex-shrink-0 text-emerald-500 mt-1">
      <Icons.Check className="fill-emerald-500 text-white dark:text-black" size={24} />
    </div>
    <div className="flex flex-col">
      <span className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">
        {title}
      </span>
      <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {text}
      </span>
    </div>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Dlaczego warto?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <BenefitItem 
            title="Koniec z niezręcznymi pytaniami" 
            text="Nie musisz już pytać 'Kiedy mi to oddasz?'. Aplikacja wyśle powiadomienie za Ciebie." 
          />
          <BenefitItem 
            title="Wszystko w jednym miejscu" 
            text="Książki, gry, narzędzia, a nawet pieniądze. Zapisuj wszystko, co pożyczasz i odzyskuj swoje rzeczy." 
          />
          <BenefitItem 
            title="Bezpieczeństwo danych" 
            text="Twoje dane są bezpieczne. Logujesz się za pomocą e-maila i hasła, a historia pożyczek jest zawsze pod ręką." 
          />
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
