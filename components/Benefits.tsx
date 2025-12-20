import React from 'react';
import { Container } from './ui/Container';
import { Icons } from './ui/Icon';

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="shrink-0 text-emerald-500">
      <Icons.Check className="fill-emerald-500 text-white dark:text-black" size={24} />
    </div>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-tight">
      {text}
    </span>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-8">
      <Container>
        <h2 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Korzyści
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-6 sm:gap-10 px-4">
          <BenefitItem text="Unikaj nieporozumień" />
          <BenefitItem text="Łatwe śledzenie przedmiotów" />
          <BenefitItem text="Większy spokój ducha" />
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
