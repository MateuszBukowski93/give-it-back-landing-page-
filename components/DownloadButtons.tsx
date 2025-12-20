import React from 'react';
import { Container } from './ui/Container';
import { HandPlatter } from 'lucide-react';

const DownloadButtons: React.FC = () => {
    function handleStore(){
        const appStore = document.getElementById('appStore');
        const googlePlay = document.getElementById('googlePlay');
        if(appStore){
            window.open('https://apps.apple.com/pl/', '_blank');
        }
        if(googlePlay){
            window.open('https://play.google.com/store/apps/', '_blank');
        }
    }
  return (
    <section className="py-12 pb-24" id='download'>
      <Container className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Pobierz aplikację
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            {/* App Store Button */}
            <button 
                onClick={() => window.open('https://apps.apple.com/pl/', '_blank')}
                className="flex-1 flex items-center justify-center gap-3 bg-gray-900 dark:bg-white/5 hover:bg-gray-800 dark:hover:bg-white/10 text-white py-4 px-6 rounded-2xl border border-transparent dark:border-white/10 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
                id='appStore'
            >
                <svg className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.84 1.53-2.95 1.5-.83-4.15-2.72-3.71-2.95-3.71z"/>
                </svg>
                <div className="text-left">
                    <div className="text-[10px] uppercase font-medium text-emerald-400">Pobierz w</div>
                    <div className="text-lg font-bold leading-none">App Store</div>
                </div>
            </button>

            {/* Google Play Button */}
            <button 
                onClick={() => window.open('https://play.google.com/store/apps/', '_blank')}
                className="flex-1 flex items-center justify-center gap-3 bg-gray-900 dark:bg-white/5 hover:bg-gray-800 dark:hover:bg-white/10 text-white py-4 px-6 rounded-2xl border border-transparent dark:border-white/10 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
                id='googlePlay'
            >
                <svg className="w-7 h-7 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,12.08L17.58,9.35L15.39,11.54L17.58,13.73L20.3,11.01C20.55,11.26 20.55,11.67 20.3,11.92M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" />
                </svg>
                <div className="text-left">
                    <div className="text-[10px] uppercase font-medium text-emerald-400">Pobierz z</div>
                    <div className="text-lg font-bold leading-none">Google Play</div>
                </div>
            </button>
        </div>
        
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Dostępne na iOS i Android
        </p>
      </Container>
    </section>
  );
};

export default DownloadButtons;
