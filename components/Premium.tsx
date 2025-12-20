import React from 'react';
import { Container } from './ui/Container';
import { Icons } from './ui/Icon';

const Premium: React.FC = () => {
  return (
    <section className="py-8">
      <Container>
        {/* Premium Card with Golden Glow Border */}
        <div className="relative group max-w-lg mx-auto hover:cursor-pointer">
            {/* Animated Glow behind the card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/20 to-emerald-600/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#0f1110] border border-gray-100 dark:border-white/5 p-1">
                <div className="relative h-full bg-gradient-to-br from-yellow-50/50 via-white to-emerald-50/30 dark:from-[#161817] dark:via-[#0f1110] dark:to-[#050605] rounded-xl p-5 flex items-center gap-5">
                    
                    {/* Interior Glows */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-[50px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none"></div>

                    <div className="shrink-0 relative z-10">
                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-600/5 border border-yellow-200 dark:border-yellow-500/20 text-yellow-600 dark:text-yellow-500 shadow-inner">
                            <Icons.Crown size={28} fill="currentColor" className="drop-shadow-sm" />
                        </div>
                    </div>
            
                    <div className="flex-1 relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                            Wersja Premium
                            </h3>
                            <span className="px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-[10px] font-bold text-yellow-700 dark:text-yellow-500 border border-yellow-200 dark:border-yellow-700/30">
                                PRO
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Odblokuj nieograniczoną liczbę przedmiotów, usuń reklamy i wspieraj rozwój aplikacji.
                        </p>
                    </div>

                    {/* Arrow/Chevron indicating action (Optional) */}
                    <div className="text-gray-300 dark:text-gray-700 group-hover:translate-x-1 transition-transform">
                        <Icons.ChevronRight size={20} />
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Premium;
