import React from 'react';
import { Container } from '../components/ui/Container';
import { TermsOfServiceContent } from '../components/LegalContent';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
      <Container>
        <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-white/5">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Regulamin</h1>
          <div className="prose prose-emerald dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            <TermsOfServiceContent />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsOfServicePage;
