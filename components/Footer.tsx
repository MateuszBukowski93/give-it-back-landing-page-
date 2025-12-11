import React from 'react';
import { Container } from './ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-black">
      <Container className="text-center">
        <div className="flex justify-center gap-8 mb-4 text-sm text-emerald-600 dark:text-emerald-400 font-medium underline-offset-4">
            <a href="#" className="hover:underline">Regulamin</a>
            <a href="#" className="hover:underline">Polityka prywatności</a>
        </div>
        <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Give IT Back. Wszelkie prawa zastrzeżone.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
