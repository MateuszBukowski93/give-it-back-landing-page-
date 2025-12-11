import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Premium from './components/Premium';
import DownloadButtons from './components/DownloadButtons';
import Footer from './components/Footer';
import './services/firebase'; // Init firebase

const App: React.FC = () => {
  // Default to dark mode as per design
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // PWA Service Worker Registration Hint
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').catch(err => {
          console.error('ServiceWorker registration failed: ', err);
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Benefits />
        <Premium />
        <DownloadButtons />
      </main>

      <Footer />
    </div>
  );
};

export default App;
