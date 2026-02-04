import React, { useState } from 'react';
import MagazinePreview from './components/MagazinePreview';
import { PageType } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>('PAGE_1');

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8FA]">
      {/* Editorial Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-[#7A6E94]/10 px-6 py-6 flex flex-col items-center gap-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#7A6E94] rounded-full flex items-center justify-center text-[#F8F8FA] shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold text-[#5D5276] tracking-tight">Wellness Studio</h1>
            <p className="text-[10px] text-[#7A6E94] uppercase tracking-[0.2em] font-bold">2-Page Editorial Guide</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex justify-center gap-2 p-1.5 bg-[#F8F8FA] rounded-full border border-[#7A6E94]/10">
          <button 
            onClick={() => setActivePage('PAGE_1')}
            className={`px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activePage === 'PAGE_1' ? 'bg-white text-[#5D5276] shadow-sm ring-1 ring-[#7A6E94]/10' : 'text-[#7A6E94] hover:text-[#5D5276]'}`}
          >
            Page 1
          </button>
          <button 
            onClick={() => setActivePage('PAGE_2')}
            className={`px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activePage === 'PAGE_2' ? 'bg-white text-[#5D5276] shadow-sm ring-1 ring-[#7A6E94]/10' : 'text-[#7A6E94] hover:text-[#5D5276]'}`}
          >
            Page 2
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        <div className="flex justify-center w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
          <MagazinePreview page={activePage} />
        </div>
      </main>

      <footer className="py-12 px-6 text-center border-t border-[#7A6E94]/5">
        <p className="text-[#7A6E94] text-[9px] font-bold uppercase tracking-[0.3em] mb-2">
          Sisterly Advice & Editorial Support
        </p>
        <p className="text-[#7A6E94]/60 text-[10px] italic">
          Educational info only — not medical advice.
        </p>
      </footer>
    </div>
  );
};

export default App;




