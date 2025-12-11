import React from 'react';
import { Icons } from './ui/Icon';
import { Container } from './ui/Container';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/40 border-b border-gray-200 dark:border-white/5">
      <Container className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-700 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/20">
                G
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight dark:text-white">Give IT Back</span>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <span className="hidden sm:block text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Śledź, pożyczaj, oddawaj.
            </span>
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
                aria-label="Toggle theme"
            >
                {isDark ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
