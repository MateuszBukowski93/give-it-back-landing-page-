import React from 'react';
import { Container } from './ui/Container';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-8">
      <Container>
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#1a412e] to-[#05110a] shadow-2xl shadow-emerald-900/20 border border-white/10">
            
            {/* Background Texture/Noise (Optional for aesthetics) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <div className="flex flex-col items-center text-center p-6 sm:p-10 relative z-10">
                
                {/* Illustration Image */}
                <div className="w-full max-w-[320px] mb-6 relative">
                     {/* Using a placeholder that resembles hands exchanging an item (book) */}
                    <img 
                        src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop" 
                        alt="Hands exchanging a book" 
                        className="w-full h-48 object-cover rounded-xl shadow-lg border border-white/10 opacity-90 mask-image-gradient"
                        style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                    />
                     {/* Overlay gradient to blend image into card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102d20] to-transparent pointer-events-none"></div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    Zarządzaj pożyczonymi <br className="hidden sm:block"/> rzeczami bez problemów
                </h1>
                
                <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                    Zapomnij o zagubionych przedmiotach. Twoje osobiste centrum zarządzania pożyczkami.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                        Zacznij teraz
                    </button>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
